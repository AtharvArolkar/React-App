import { useNavigate } from "react-router-dom";

export default function QuestionList() {
  const qts = [
    { id: 1, name: "Bank 1", noOfQts: 2 },
    { id: 2, name: "Bank 2", noOfQts: 2 },
  ];

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      {qts.map((q, index) => (
        <div
          style={{ border: "1px solid black", padding: 10 }}
          key={index}
          onClick={() => {
            navigate(`/${q.id}`);
          }}
        >
          {q.name}
        </div>
      ))}
    </div>
  );
}
