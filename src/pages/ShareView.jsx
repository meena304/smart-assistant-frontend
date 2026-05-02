import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function ShareView() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSharedContent();
  }, [id]);

  const fetchSharedContent = async () => {
    try {
      const res = await api.get(`/public/${id}`);
      setData(res.data);
    } catch (err) {
      setError("Content not found or link is invalid");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Loading shared content...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          {error}
        </div>
      </div>
    );
  }

  // Success UI
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="mb-3">Shared Content</h4>

          <div className="mb-3">
            <strong>Type:</strong> {data.type}
          </div>

          <div className="mb-3">
            <strong>Original Input:</strong>
            <p className="border p-2 bg-light">{data.inputText}</p>
          </div>

          <div className="mb-3">
            <strong>Generated Output:</strong>
            <p className="border p-2">{data.outputText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}