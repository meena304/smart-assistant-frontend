export default function OutputCard({ result }) {
  return (
    <div className="card mt-3 shadow-sm">
      <div className="card-body">
        <h5>Generated Output</h5>
        <p>{result}</p>
      </div>
    </div>
  );
}