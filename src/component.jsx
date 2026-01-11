import React, { useState } from "react";
import "./styles.css";

const AGENTS = [
  { title: "Market Data Agent", desc: "Fetches stock price, P/E ratio, EPS" },
  { title: "Sentiment Agent", desc: "Analyzes news sentiment" },
  { title: "Quant Agent", desc: "Calculates technical indicators" },
  { title: "Strategy Agent", desc: "Generates BUY / SELL / HOLD" }
];

export default function App() {
  const [symbol, setSymbol] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const analyze = () => {
    if (!symbol.trim()) {
      alert("Enter stock symbol");
      return;
    }

    setLoading(true);
    setReport(null);

    setTimeout(() => {
      setLoading(false);
      setReport({
        symbol: symbol.toUpperCase(),
        price: "$182.40",
        pe: "28.3",
        eps: "6.5",
        sentiment: "Positive",
        trend: "Bullish",
        decision: "HOLD",
        risk: "Medium",
        horizon: "3–6 Months"
      });
    }, 1200);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>📊 Multi-Agent Stock Analyzer</h1>
        <p className="subtitle">Intelligent Financial Analysis System</p>

        <label>Stock Symbol</label>
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="AAPL"
        />

        <button onClick={analyze} disabled={loading || !symbol}>
          {loading ? "Analyzing..." : "Analyze Stock"}
        </button>
      </div>

      <div className="grid">
        {AGENTS.map((a, i) => (
          <div className="agentCard" key={i}>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>

      {report && (
  <div className="reportDashboard">
    <h2>📊 Final Analysis Dashboard</h2>

    <div className="dashGrid">
      <div className="dashCard"><h4>Stock</h4><p>{report.symbol}</p></div>
      <div className="dashCard"><h4>Price</h4><p>{report.price}</p></div>
      <div className="dashCard"><h4>P/E Ratio</h4><p>{report.pe}</p></div>
      <div className="dashCard"><h4>EPS</h4><p>{report.eps}</p></div>
      <div className="dashCard"><h4>Sentiment</h4><p>{report.sentiment}</p></div>
      <div className="dashCard"><h4>Trend</h4><p>{report.trend}</p></div>
      <div className="dashCard highlight"><h4>Decision</h4><p>{report.decision}</p></div>
      <div className="dashCard"><h4>Risk</h4><p>{report.risk}</p></div>
      <div className="dashCard"><h4>Horizon</h4><p>{report.horizon}</p></div>
    </div>

    {/* Chart Section */}
    <h3 style={{ marginTop: "25px" }}>📈 Agent Strength Chart</h3>
    <div className="chartBox">
      <div className="bar">
        <span>Market</span>
        <div className="barFill" style={{ width: "80%" }}>80%</div>
      </div>
      <div className="bar">
        <span>Sentiment</span>
        <div className="barFill" style={{ width: "70%" }}>70%</div>
      </div>
      <div className="bar">
        <span>Quant</span>
        <div className="barFill" style={{ width: "75%" }}>75%</div>
      </div>
      <div className="bar">
        <span>Strategy</span>
        <div className="barFill" style={{ width: "65%" }}>65%</div>
      </div>
    </div>
  </div>
)}
</div>
);
}