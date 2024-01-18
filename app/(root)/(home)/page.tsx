import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/home/NoResult";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: {
      _id: 123,
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 1124,
    views: 1124325,
    answers: [
      {
        _id: 1,
        text: "You can use the cascade option in SQLAlchemy.",
        author: "Jane Smith",
      },
      {
        _id: 2,
        text: "Here is an example of cascading deletes.",
        author: "Bob Johnson",
      },
    ],
    createdAt: new Date(Math.random() * new Date().getTime()),
  },
  {
    _id: 2,
    title: "How to center a div?",
    tags: [
      { _id: 3, name: "css" },
      { _id: 4, name: "web" },
    ],
    author: {
      _id: 456,
      name: "Alice Johnson",
      picture: "alice-johnson.jpg",
    },
    upvotes: 15,
    views: 120,
    answers: [
      {
        _id: 1,
        text: "You can use 'margin: auto' to center a div.",
        author: "Bob Smith",
      },
      {
        _id: 2,
        text: "Flexbox is also a great way to center elements.",
        author: "Charlie Brown",
      },
    ],
    createdAt: new Date(Math.random() * new Date().getTime()),
  },
  {
    _id: 3,
    title: "What is 'use client'?",
    tags: [
      { _id: 5, name: "next" },
      { _id: 6, name: "web" },
    ],
    author: {
      _id: 789,
      name: "Eve Miller",
      picture: "eve-miller.jpg",
    },
    upvotes: 8,
    views: 80,
    answers: [
      {
        _id: 1,
        text: "'use client' is a hook in Next.js for data fetching.",
        author: "David Wilson",
      },
      {
        _id: 2,
        text: "Here is how you can use 'use client' in your Next.js project.",
        author: "Grace Thompson",
      },
    ],
    createdAt: new Date(Math.random() * new Date().getTime()),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-2-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be there fist to break the silence! 🚀 Ask a Question and kickstart the discussion. Your query could be the next big thing others learn form.         Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
