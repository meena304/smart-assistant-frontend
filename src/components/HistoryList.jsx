import api from "../services/api";

export default function HistoryList({ history }) {

  const handleShare = async (id) => {
    try {
      const res = await api.post(`/content/share/${id}`);

      const shareId = res.data.shareUrl.split("/").pop();
      const fullUrl = `${window.location.origin}/share/${shareId}`;

      navigator.clipboard.writeText(fullUrl);
      alert("Link copied!");
    } catch (err) {
      alert("Error sharing content");
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5>History</h5>

        {history.map((item) => (
          <div key={item._id} className="border-bottom py-2">

            <small className="text-muted">{item.type}</small>

            <p>{item.outputText}</p>

           
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => handleShare(item._id)}
            >
              Share
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}