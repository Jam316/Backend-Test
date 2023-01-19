'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          books_pkey: 1,
          name: "You Don't Know JS Yet",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 2,
          name: "How to Cook for Beginners",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 3,
          name: "Science of Cooking",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 4,
          name: "Don't Believe Everything You Think",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 5,
          name: "Types & Grammar",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 6,
          name: "Async & Performance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 7,
          name: "Science of Spice",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 8,
          name: "Think Like a Monk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 9,
          name: "The Art of War",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 10,
          name: "Scope & Closure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 11,
          name: "Beyond Thoughts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 12,
          name: "Love People Use Things",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 13,
          name: "One Pot Supereme",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          books_pkey: 14,
          name: "Especias",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          authors_pkey: 1,
          name: "Kyle Simpson",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          authors_pkey: 2,
          name: "Gwyn Novak",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          authors_pkey: 3,
          name: "Dr. Stuart Farrimond",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          authors_pkey: 4,
          name: "Joseph Nguyen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          authors_pkey: 5,
          name: "Jay Shetty",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'author_books',
      [
        {
          author_books_pkey: 11,
          author_books_author_id_fkey: 1,
          author_books_book_id_fkey: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 22,
          author_books_author_id_fkey: 2,
          author_books_book_id_fkey: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 33,
          author_books_author_id_fkey: 3,
          author_books_book_id_fkey: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 44,
          author_books_author_id_fkey: 4,
          author_books_book_id_fkey: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 51,
          author_books_author_id_fkey: 1,
          author_books_book_id_fkey: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 61,
          author_books_author_id_fkey: 1,
          author_books_book_id_fkey: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 73,
          author_books_author_id_fkey: 3,
          author_books_book_id_fkey: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 85,
          author_books_author_id_fkey: 5,
          author_books_book_id_fkey: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 94,
          author_books_author_id_fkey: 4,
          author_books_book_id_fkey: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 101,
          author_books_author_id_fkey: 1,
          author_books_book_id_fkey: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 114,
          author_books_author_id_fkey: 4,
          author_books_book_id_fkey: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 125,
          author_books_author_id_fkey: 5,
          author_books_book_id_fkey: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 132,
          author_books_author_id_fkey: 2,
          author_books_book_id_fkey: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_books_pkey: 143,
          author_books_author_id_fkey: 3,
          author_books_book_id_fkey: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'people',
      [
        {
          people_pkey: 1,
          name: "Romaguera-Crona",
          country_id: 'SG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 2,
          name: "Leanne Graham",
          country_id: 'US',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 3,
          name: "Ervin Howell",
          country_id: 'MY',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 4,
          name: "Clementine Bauch",
          country_id: 'US',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 5,
          name: "Chelsey Dietrich",
          country_id: 'SG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 6,
          name: "Kurtis Weissnat",
          country_id: 'SG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 7,
          name: "Mrs. Dennis Schulist",
          country_id: 'SG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          people_pkey: 8,
          name: "Clementina DuBuque",
          country_id: 'MY',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    const bookRents = [...Array(100)].map((_, index) => {
      return {
        id: index+1,
        person_id: Math.floor(Math.random() * 8) + 1,
        book_id: Math.floor(Math.random() * 14) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert(
      'book_rents', bookRents,
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
