import Link from 'next/link';

const articles = [
    {
        title: "Understanding Credit Scores",
        content: "Learn how credit scores work and why they are important for your financial health.",
        slug: "understanding-credit-scores"
    },
    {
        title: "Budgeting Basics",
        content: "Discover the fundamentals of budgeting and how to create a budget that works for you.",
        slug: "budgeting-basics"
    },
    {
        title: "Basics of Investing",
        content: "An introduction to investing, including different types of investments and how to get started.",
        slug: "basics-of-investing"
    },
];

const faqs = [
    {
        question: "What is a credit score?",
        answer: "A credit score is a numerical representation of your creditworthiness, based on your credit history."
    },
    {
        question: "How can I improve my credit score?",
        answer: "You can improve your credit score by paying bills on time, reducing debt, and avoiding new hard inquiries."
    },
    {
        question: "What is budgeting?",
        answer: "Budgeting is the process of creating a plan to manage your income and expenses."
    }
];

const Articles = () => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Financial Education Articles</h2>
            <ul className="space-y-4">
                {articles.map((article) => (
                    <li key={article.slug} className="border-b pb-4">
                        <h3 className="text-xl font-semibold">
                            <Link href={`articles/${article.slug}`}>
                                {article.title}
                            </Link>
                        </h3>
                        <p className="mt-2">{article.content}</p>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        <h4 className="font-semibold">{faq.question}</h4>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;