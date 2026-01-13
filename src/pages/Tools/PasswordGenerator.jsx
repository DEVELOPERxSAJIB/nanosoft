import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaLock, FaCopy, FaSync, FaShieldAlt, FaBolt, FaCheck,
  FaKey, FaExclamationTriangle, FaHistory, FaInfoCircle
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false
  });
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ label: "Weak", color: "#e74c3c", percent: 25 });
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = "";
    let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowers = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (options.excludeSimilar) {
      uppers = uppers.replace(/[ILOU]/g, "");
      lowers = lowers.replace(/[iluov]/g, "");
      numbers = numbers.replace(/[01]/g, "");
    }

    if (options.excludeAmbiguous) {
      symbols = symbols.replace(/[{}[\]()\/\\'"`~,;:.<>]/g, "");
    }

    if (options.uppercase) charset += uppers;
    if (options.lowercase) charset += lowers;
    if (options.numbers) charset += numbers;
    if (options.symbols) charset += symbols;

    if (!charset) {
      setPassword("");
      return;
    }

    let generated = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      generated += charset.charAt(array[i] % charset.length);
    }

    setPassword(generated);
    calculateStrength(generated);

    // Save to history (don't track the actual password in events, just meta)
    const historyItem = {
      id: Date.now(),
      value: generated,
      length: length,
      date: new Date().toLocaleTimeString()
    };
    setHistory(prev => [historyItem, ...prev].slice(0, 5));

    trackEvent("ToolAction", { tool: "PasswordGenerator", action: "Generate Password", length });
  }, [length, options]);

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 8) score++;
    if (pwd.length > 12) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) setStrength({ label: "Weak", color: "#e74c3c", percent: 25 });
    else if (score === 3) setStrength({ label: "Medium", color: "#f1c40f", percent: 50 });
    else if (score === 4) setStrength({ label: "Strong", color: "#2ecc71", percent: 75 });
    else setStrength({ label: "Very Strong", color: "#27ae60", percent: 100 });
  };

  useEffect(() => {
    document.title = "Strong Password Generator - Secure & Random | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Generate strong, secure, and random passwords instantly. Customize length and characters. Free online security tool by NanoSoft.' },
      { name: 'keywords', content: 'password generator, strong password, random password, secure password, online security, nanosoft' },
      { property: 'og:title', content: 'Strong Password Generator - Secure & Random' },
      { property: 'og:description', content: 'Generate high-entropy random passwords instantly. Secure and private online tool.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/password-generator' }
    ];

    metaTags.forEach(tag => {
      let element = tag.name ? document.querySelector(`meta[name="${tag.name}"]`) : document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.property = tag.property;
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    generatePassword();
  }, []);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "PasswordGenerator", action: "Copy Password" });
  };

  return (
    <Layout>
      <PageTitle
        title="Secure Password Generator"
        description="Protect your accounts with unbreakable random passwords generated locally."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f9faff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Security Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Password Generator</h1>
                  <p className="desc w-75 mx-auto text-muted"> Generate unique passwords with high entropy to secure your digital life.</p>
                </div>

                <div className="password-display-wrap mb-4 p-4 rounded d-flex align-items-center justify-content-between" style={{ backgroundColor: "#f0f4ff", border: "2px solid #e1e7ff" }}>
                  <div className="password-text h3 mb-0 font-weight-bold overflow-hidden text-truncate" style={{ color: "#03228f", letterSpacing: "1px" }}>
                    {password || "Select options below"}
                  </div>
                  <div className="actions d-flex gap-2">
                    <button onClick={generatePassword} className="btn p-2 text-primary" title="Regenerate"><FaSync size={20} /></button>
                    <button onClick={handleCopy} className="btn p-2 text-primary" title="Copy">{copied ? <FaCheck size={20} color="#27ae60" /> : <FaCopy size={20} />}</button>
                  </div>
                </div>

                <div className="strength-meter mb-5">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small font-weight-bold text-muted uppercase">Strength: <span style={{ color: strength.color }}>{strength.label}</span></span>
                  </div>
                  <div className="progress" style={{ height: "6px", backgroundColor: "#eee" }}>
                    <div className="progress-bar transition-all" style={{ width: `${strength.percent}%`, backgroundColor: strength.color }}></div>
                  </div>
                </div>

                <div className="settings-panel">
                  <h6 className="mb-4">Customize Password:</h6>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between small font-weight-bold text-muted mb-2">
                      <span>Length</span>
                      <span>{length} characters</span>
                    </div>
                    <input
                      type="range"
                      className="custom-range"
                      min="6"
                      max="50"
                      value={length}
                      onChange={(e) => setLength(parseInt(e.target.value))}
                      style={{ accentColor: "#03228f" }}
                    />
                  </div>

                  <div className="row">
                    {[
                      { id: 'uppercase', label: 'Uppercase (A-Z)' },
                      { id: 'lowercase', label: 'Lowercase (a-z)' },
                      { id: 'numbers', label: 'Numbers (0-9)' },
                      { id: 'symbols', label: 'Symbols (!@#$)' },
                      { id: 'excludeSimilar', label: 'Exclude Similar (i, l, 1)' },
                      { id: 'excludeAmbiguous', label: 'Exclude Ambiguous ({} [])' }
                    ].map(opt => (
                      <div key={opt.id} className="col-md-6 mb-3">
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={opt.id}
                            checked={options[opt.id]}
                            onChange={(e) => setOptions(prev => ({ ...prev, [opt.id]: e.target.checked }))}
                          />
                          <label className="custom-control-label font-weight-bold" htmlFor={opt.id} style={{ cursor: "pointer", fontSize: "14px" }}>{opt.label}</label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button onClick={generatePassword} className="readon w-100 mt-4" style={{ backgroundColor: "#03228f", border: "none" }}>
                    <FaKey className="mr-2" /> Generate Strong Password
                  </button>

                  <div className="mt-4 text-center">
                    <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                      <FaHistory className="mr-1" /> {showHistory ? "Hide Recent Passwords" : "Show Recent Passwords"}
                    </button>
                  </div>

                  {showHistory && (
                    <div className="history-list mt-3 p-3 bg-light rounded border">
                      <h6 className="small font-weight-bold text-uppercase mb-2">Recently Generated</h6>
                      <div className="d-flex flex-column gap-2">
                        {history.length > 0 ? (
                          history.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm border">
                              <code className="text-primary" style={{ fontSize: "12px" }}>{item.value}</code>
                              <span className="text-muted" style={{ fontSize: "10px" }}>{item.date}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-2 small text-muted">No history yet</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="row text-center mt-30">
                <div className="col-md-4 mb-3">
                  <FaShieldAlt size={30} color="#03228f" className="mb-2" />
                  <h6>100% Secure</h6>
                  <p className="small text-muted">Passwords are generated on your device, not our server.</p>
                </div>
                <div className="col-md-4 mb-3">
                  <FaBolt size={30} color="#03228f" className="mb-2" />
                  <h6>Instant</h6>
                  <p className="small text-muted">Get random passwords in a millisecond.</p>
                </div>
                <div className="col-md-4 mb-3">
                  <FaExclamationTriangle size={30} color="#03228f" className="mb-2" />
                  <h6>No Tracking</h6>
                  <p className="small text-muted">We never see or store your generated passwords.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="seo-content mt-100 p-20">
            <h2 className="text-center mb-50">Why Strong Passwords Matter</h2>
            <div className="row text-muted">
              <div className="col-lg-6 mb-4">
                <h5>Brute Force Protection</h5>
                <p className="small">A typical 8-character password with only letters can be cracked in minutes. Our generator allows up to 50 characters with symbols, making it nearly impossible for modern brute-force attacks to succeed.</p>
              </div>
              <div className="col-lg-6 mb-4">
                <h5>Entropy & Randomness</h5>
                <p className="small">Human-chosen passwords often follow predictable patterns (birthdays, pets). Our generator uses cryptographic randomness to ensure every character has high entropy and no predictable sequence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PasswordGenerator;
