export default function InputBox({ text, setText, generate }) {
  return (
    <div className="card p-3 shadow-sm">
      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={() => generate('summary')}>
          Summary
        </button>
        <button className="btn btn-success" onClick={() => generate('rewrite')}>
          Rewrite
        </button>
        <button className="btn btn-warning" onClick={() => generate('bullets')}>
          Bullets
        </button>
      </div>
    </div>
  );
}