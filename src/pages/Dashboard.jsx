import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InputBox from '../components/InputBox';
import OutputCard from '../components/OutputCard';
import HistoryList from '../components/HistoryList';
import api from '../services/api';

export default function Dashboard() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const generate = async (type) => {
  try {
    const res = await api.post("/content/generate", {
      text,
      type,
    });

    setResult(res.data.outputText);
    fetchHistory();
  } catch (err) {
     if (err.response?.status === 429) {
      alert("Too many requests! Please wait a moment.");
    } else {
      alert("Something went wrong.");
    }
    // alert(err.message);
  }
};

  const fetchHistory = async () => {
  try {
    const res = await api.get("/content/history");
    setHistory(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchHistory();
}, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <InputBox text={text} setText={setText} generate={generate} />
        <OutputCard result={result} />
        <HistoryList history={history} />
      </div>
    </>
  );
}