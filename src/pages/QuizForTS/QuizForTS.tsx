import { RadioGroupForm } from "@/components/shared/radioGroupForm/RadioGroupForm.component";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function QuizForTS() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/ts_quiz.json");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (questions && questions.length === 0) fetchData();
  }, [questions]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3  flex-grow gap-5 justify-between">
      {loading && <Loading />}

      {questions.map((item, index) => {
        return (
          <div key={index}>
            <RadioGroupForm item={item} />
          </div>
        );
      })}
    </div>
  );
}
