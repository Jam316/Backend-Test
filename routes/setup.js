const db = require("../models/index.js");
const bookStore = db.sequelize;

const setupRoutes = app => {
  app.get("/", (req, res) => {
    res.json({ message: "Running Node REST API" });
  });

  app.get("/getTop3ReadBook", async (req, res) => {
    const query = req.query.country_code;

    try {
      const result = await bookStore.query(
        `SELECT people.country_id AS country_code, book_rents.book_id AS book_id, books.name AS book,
          authors.name as author,
          people.name AS borrower
          FROM
          book_rents
          RIGHT JOIN author_books ON book_rents.book_id = author_books.author_books_book_id_fkey
          INNER JOIN books ON author_books.author_books_book_id_fkey = books.books_pkey
          INNER JOIN people ON book_rents.person_id = people.people_pkey
          INNER JOIN authors ON author_books.author_books_book_id_fkey = authors.authors_pkey
          WHERE
          people.country_id = :country_code
          GROUP BY
          book_id,
          book,
          author,
          borrower,
          country_code
          ORDER BY
          COUNT(DISTINCT book_rents.book_id) DESC`,
        {
          replacements: { country_code: query.toUpperCase() },
        }
      );

      const books = result[0];
      let tmpArr = [];

      books.forEach(b => {
        let find;
        if ((find = tmpArr.find(f => f.book_id === b.book_id))) {
          find.borrower = Array.isArray(find.borrower)
            ? [...find.borrower, b.borrower]
            : [find.borrower, b.borrower];
        } else {
          tmpArr.push(b);
        }
      });

      const formattedBooks = tmpArr.map(item => {
        return {
          author: item.author,
          name: item.book,
          borrower: Array.isArray(item.borrower)
            ? item.borrower
            : [item.borrower],
        };
      });

      if (formattedBooks.length > 1) {
        res.send({ books: formattedBooks.splice(0, 3) });
      } else {
        res.status(404).send({ status: 404, message: "no result" });
      }
    } catch (error) {
      res.status(400).send({ status: 400, message: "invalid param" });
    }
  });
};

module.exports = setupRoutes;
