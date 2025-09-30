interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "Which positions can we join?",
    answer: (
      <>
        You can join as <span className="font-light text-amber-500">Management Team (MT)</span> member (for freshmen), or as <span className="font-light text-amber-500">Host Team (HT)</span> member (for sophomores), or as an <span className="font-light text-amber-500">Executive (EC)</span> member (for either sophomore or junior).
      </>
    ),
  },
  {
    question: "What is Computer Science Society about?",
    answer: (
      <>
        The <span className="font-light text-amber-500">Computer Science Society (CSS)</span> is a student-led organization that aims to foster a community of computer science enthusiasts. We provide <span className="font-light text-amber-500">resources</span>, <span className="font-light text-amber-500">support</span>, and <span className="font-light text-amber-500">networking opportunities</span> for students interested in technology and programming.
      </>
    ),
  },
  {
    question: "What is the major event that you host?",
    answer: (
      <>
        We host an annual flagship event called <span className="font-light text-amber-500">ProBattle</span> which happens in the <span className="font-light text-amber-500">spring semester</span>.
      </>
    ),
  },
  {
    question: "How can I participate in events?",
    answer: (
      <>
        You can participate by registering through our <span className="font-light text-amber-500">official forms</span> shared on our website&apos;s form page and social media. Stay tuned for <span className="font-light text-amber-500">announcements</span>!
      </>
    ),
  },
];

export { faqs };