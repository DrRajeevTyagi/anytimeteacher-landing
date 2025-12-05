import { useState } from 'react'
import './App.css'

function App() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const apps = [
    {
      id: 'ai-tutor',
      name: 'AnytimeTeacher AI',
      icon: '🤖',
      description: 'AI-powered lesson plan generator with student testing',
      features: ['Generate lesson plans', 'Student assessments', 'Plan improvements', 'Time-saving'],
      url: 'https://ai.anytimeteacher.com',
      status: 'Coming Soon',
      color: '#4CAF50'
    },
    {
      id: 'edupath',
      name: 'EduPath',
      icon: '📊',
      description: 'Academic milestone tracker for English & Math',
      features: ['Progress tracking', 'Personalized paths', 'Achievement badges', 'Parent visibility'],
      url: 'https://edupath.anytimeteacher.com',
      status: 'Coming Soon',
      color: '#2196F3'
    },
    {
      id: 'planner',
      name: 'EduPlanner',
      icon: '📅',
      description: 'School activity and teacher workload management',
      features: ['Calendar integration', 'Duty management', 'Workload balancing', 'Principal dashboard'],
      url: 'https://planner.anytimeteacher.com',
      status: 'Coming Soon',
      color: '#FF9800'
    },
    {
      id: 'voting',
      name: 'School Elections',
      icon: '🗳️',
      description: 'Secure digital voting system for school elections',
      features: ['Digital voting', 'Real-time counting', 'Secure system', 'Transparent results'],
      url: 'https://voting.anytimeteacher.com',
      status: 'Coming Soon',
      color: '#9C27B0'
    },
    {
      id: 'compliance',
      name: 'CBSE/DoE Compliance',
      icon: '✅',
      description: 'Regulatory compliance tracker based on circulars',
      features: ['Circular tracking', 'AI document analysis', 'Deadline alerts', 'Compliance reports'],
      url: 'https://compliance.anytimeteacher.com',
      status: 'Coming Soon',
      color: '#F44336'
    },
    {
      id: 'portal',
      name: 'Student Portal',
      icon: '📚',
      description: 'Student information management system',
      features: ['Student records', 'Grade management', 'Class information', 'Easy access'],
      url: 'https://trystudent-portal.vercel.app',
      status: 'Live Now!',
      color: '#00BCD4'
    }
  ]

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-icon">🎓</div>
          <h1 className="hero-title">AnytimeTeacher</h1>
          <p className="hero-subtitle">Educational Platform by Dr. Rajeev Tyagi</p>
          <p className="hero-description">
            AI-Powered Educational Tools Built by a Principal for Educators, Students, and Schools
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">6</div>
              <div className="stat-label">Apps & Services</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Accessible</div>
            </div>
          </div>
        </div>
      </header>

      {/* Apps Section */}
      <section className="apps-section">
        <h2 className="section-title">Our Apps & Services</h2>
        <p className="section-subtitle">Comprehensive tools for modern education</p>
        
        <div className="apps-grid">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className={`app-card ${selectedApp === app.id ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedApp(app.id)}
              onMouseLeave={() => setSelectedApp(null)}
              style={{ borderColor: app.color }}
            >
              <div className="app-icon" style={{ backgroundColor: app.color + '20' }}>
                <span style={{ fontSize: '3rem' }}>{app.icon}</span>
              </div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-description">{app.description}</p>
              
              <ul className="app-features">
                {app.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              
              <div className="app-footer">
                <span 
                  className={`app-status ${app.status === 'Live Now!' ? 'live' : 'coming-soon'}`}
                >
                  {app.status}
                </span>
                {app.status === 'Live Now!' && (
                  <a 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="app-link"
                    style={{ backgroundColor: app.color }}
                  >
                    Launch App →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About AnytimeTeacher</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Experience-Driven Educational Solutions</h3>
            <p>
              With 28 years of teaching Physics and 19 years of school administration experience, 
              AnytimeTeacher platform addresses real challenges faced by educators and students. 
              Each tool is designed from ground-up understanding of classroom and administrative needs.
            </p>
            <p>
              Combining decades of educational expertise with modern AI technology to create 
              practical, effective solutions for schools.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <span>IIT Alumnus</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">📚</span>
                <span>28 Years Teaching Physics</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🏫</span>
                <span>19 Years Running Schools</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">⭐</span>
                <span>Military School Ajmer</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <h4>Dr. Rajeev Tyagi</h4>
              <p>School Principal | IIT Alumnus</p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                28 years of Physics teaching | 19 years of school leadership | 
                Military School Ajmer graduate | Building technology solutions 
                that address real educational challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon">👨‍🏫</div>
            <h3>Empower Teachers</h3>
            <p>Save time with AI-powered lesson planning and reduce administrative burden</p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">📈</div>
            <h3>Accelerate Learning</h3>
            <p>Help students track progress and achieve their full potential</p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">🏫</div>
            <h3>Streamline Administration</h3>
            <p>Help principals manage schools efficiently and stay compliant</p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">🌍</div>
            <h3>Accessible Education</h3>
            <p>Make quality educational tools available to all, anytime, anywhere</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>🎓 AnytimeTeacher</h4>
            <p>Educational Platform for the Modern Age</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#apps">Apps & Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <p>www.anytimeteacher.com</p>
            <p>Built with ❤️ for Education</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AnytimeTeacher. All rights reserved.</p>
          <p>Created by Dr. Rajeev Tyagi | Principal & Developer</p>
        </div>
      </footer>
    </div>
  )
}

export default App
