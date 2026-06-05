import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import duo from './assets/WhatsApp Image 2026-06-05 at 7.27.06 PM.jpeg'
import bigger from './assets/WhatsApp Image 2026-06-05 at 7.00.27 PM (1).jpeg'
import smaller from './assets/WhatsApp Image 2026-06-05 at 7.00.27 PM.jpeg'
import secret from './assets/WhatsApp Image 2026-06-05 at 7.00.28 PM.jpeg'
const loveMessage =
  "Dear Saru, your day has come. This moment is not luck; it is the reward for your patience, courage, late nights, and beautiful hard work. I am so proud of you. Always."

const timelineSteps = [
  {
    title: 'Baby Girl Crawling 👶',
    caption: 'A little princess began her journey...',
  },
  {
    title: 'Playing',
    caption: 'Learning, smiling, exploring...',
  },
  {
    title: 'School 🎒',
    caption: 'Dreams started becoming bigger...',
  },
  {
    title: 'College 📚',
    caption: 'Hard work shaped the future...',
  },
  {
    title: 'Job Preparation 💻',
    caption: 'Late nights, sacrifices, and courage...',
  },
  {
    title: 'Professional Woman 👩‍💼',
    caption: 'And today... you achieved it.',
  },
]

const galleryPhotos = [
  {
    title: 'Baby Girl',
    src:smaller ,
  },
  {
    title: "Dad's Girl",
    src: bigger,
  },
  {
    title: 'Princess',
    src:  duo,
  },
 
]

const specialDate = '24 July'
const finalLines =
  'Happy Birthday in Advance, Saraswathi. No matter how far you go, I will always be cheering for you. Congratulations on your new job. Love you, always. ❤'
const finalTitle = 'From Little Princess to Independent Queen 👑'

function App() {
  const [pin, setPin] = useState('')
  const [scene, setScene] = useState<'entrance' | 'main' | 'final'>('entrance')
  const [error, setError] = useState('')
  const [unlockMessage, setUnlockMessage] = useState('')
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [shake, setShake] = useState(false)
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [showConstellation, setShowConstellation] = useState(false)
  const [showStarDate, setShowStarDate] = useState(false)
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const [lettersShown, setLettersShown] = useState(0)
  const [finalCompleted, setFinalCompleted] = useState(false)

  const starSectionRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)

  const typewriterText = useMemo(() => loveMessage.slice(0, typewriterIndex), [typewriterIndex])
  const galleryItem = galleryPhotos[galleryIndex]

  useEffect(() => {
    if (scene !== 'main') return
    if (typewriterIndex >= loveMessage.length) return

    const timer = window.setTimeout(() => {
      setTypewriterIndex((value) => value + 1)
    }, 58)

    return () => window.clearTimeout(timer)
  }, [scene, typewriterIndex])

  useEffect(() => {
    if (scene !== 'main') return
    const interval = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % timelineSteps.length)
    }, 5200)
    return () => window.clearInterval(interval)
  }, [scene])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShowConstellation(true)
          window.setTimeout(() => setShowStarDate(true), 2400)
        }
      },
      { threshold: 0.2 },
    )

    if (starSectionRef.current) {
      observer.observe(starSectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (scene !== 'final') return
    setLettersShown(0)
    setFinalCompleted(false)

    const interval = window.setInterval(() => {
      setLettersShown((value) => {
        if (value >= finalLines.length) {
          window.clearInterval(interval)
          setFinalCompleted(true)
          return value
        }
        return value + 1
      })
    }, 45)

    return () => window.clearInterval(interval)
  }, [scene])

  const handleUnlock = () => {
    if (pin.trim() === '2407') {
      setError('')
      setUnlockMessage('Access granted. Welcome, my queen. A little journey has been waiting for you...')
      setIsUnlocking(true)

      window.setTimeout(() => {
        setScene('main')
        setIsUnlocking(false)

        window.setTimeout(() => {
          heroTitleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          heroTitleRef.current?.focus({ preventScroll: true })
        }, 180)
      }, 2200)

      return
    }

    setError("Oops dear, that is not the correct pin. Try once more; I know you will remember it.")
    setShake(true)
    window.setTimeout(() => setShake(false), 850)
  }

  const handleOpenHeart = () => {
    setEnvelopeOpen((value) => !value)
  }

  const nextGallery = () => setGalleryIndex((value) => (value + 1) % galleryPhotos.length)
  const prevGallery = () =>
    setGalleryIndex((value) => (value - 1 + galleryPhotos.length) % galleryPhotos.length)
  const openFinal = () => setScene('final')

  return (
    <div className={`app ${scene}`}>
      {/* <div className="audio-panel">
        <div className="audio-label">Romantic background music</div>
        <audio controls loop>
          <source
            src="https://cdn.pixabay.com/download/audio/2022/04/24/audio_2c20a5a1ba.mp3?filename=relaxing-instrumental-music-11235.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div> */}

      <div className={`entrance-screen ${scene === 'entrance' ? 'visible' : 'hidden'}`}>
        <div className="sky-layer"></div>
        <div className="moon-glow"></div>
        <div className="floating-hearts">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="cloud-birds">
          <span className={`bird bird-1 ${shake ? 'paused' : ''}`} />
          <span className={`bird bird-2 ${shake ? 'paused' : ''}`} />
          <span className={`bird bird-3 ${shake ? 'paused' : ''}`} />
        </div>

        <div className={`glass-card ${shake ? 'shake' : ''} ${isUnlocking ? 'unlocking' : ''}`}>
          <div className="card-title">Welcome, My Dear</div>
          <p className="card-text">Please enter the secret pin to unlock your surprise journey.</p>
          <div className="pin-group">
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="Enter correct one..."
              aria-label="Enter 4 digit secret pin"
              value={pin}
              onChange={(event) => setPin(event.target.value)}
            />
          </div>
          <button className="unlock-button" onClick={handleUnlock}>
            Unlock My Story
          </button>
          {(error || unlockMessage) && (
            <div className={`feedback ${error ? 'feedback-error' : 'feedback-success'}`}>
              {error || unlockMessage}
            </div>
          )}
        </div>
      </div>

      <main className={`story-screen ${scene === 'main' ? 'visible' : 'hidden'}`}>
        <section className="hero-intro">
          <div className="intro-glow">
            <p className="subtle-label">A personalized celebration for Saraswathi</p>
            <h1 ref={heroTitleRef} tabIndex={-1}>
              CONGRATULATIONS FOR YOUR JOB 🎉
            </h1>
            <p className="intro-copy">
              From Little Princess to Independent Queen 👑
            </p>
          </div>
        </section>

        <section className="experience-grid">
          <div className="glass-section letter-card">
            <div className="section-header">
              <span>Love letter for Saru</span>
            </div>
            <div className="typewriter-card">
              <div className="typewriter-text">{typewriterText}</div>
              <span className="cursor" />
            </div>
            <div className="open-heart-block">
              <p className="open-heart-copy">
                Because your success feels like a beautiful gift, let me share one more surprise.
              </p>
              <button
                className="heart-button"
                onClick={handleOpenHeart}
                aria-expanded={envelopeOpen}
              >
                {envelopeOpen ? 'Close My Heart' : 'Open My Heart'}
              </button>
            </div>
            <div className={`envelope ${envelopeOpen ? 'open' : ''}`}>
              <div className="envelope-top" />
              <div className="envelope-body">
                <div className="photo-frame">
                  <img
                    src={secret}
                  />
                </div>
                <p className="gift-copy">
                  Keep shining. Keep smiling. I am wishing you even more success and happiness. ❤
                </p>
              </div>
            </div>
          </div>

          <div className="glass-section timeline-card">
            <div className="section-header">
              <span>Your life journey</span>
            </div>
            <div className="timeline-rail">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className={`timeline-step ${index === activeStep ? 'active' : ''}`}>
                  <div className="step-marker" />
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p>{step.caption}</p>
                  </div>
                </div>
              ))}
              <div className="final-glow-banner">
                <div className="celebrate-stars" />
                <h2>CONGRATULATIONS SARASWATHI ON YOUR NEW JOB 🎉</h2>
                <p>You are the queen of your own beautiful story.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-header">
            <div>
              <h2>Memory Gallery</h2>
              <p>Turn the pages of cherished moments with soft motion and gentle sparkle.</p>
            </div>
            <div className="gallery-controls">
              <button onClick={prevGallery} aria-label="Previous photo">
                ‹
              </button>
              <button onClick={nextGallery} aria-label="Next photo">
                ›
              </button>
            </div>
          </div>
          <div className="gallery-card">
            <img src={galleryItem.src} alt={galleryItem.title} />
            <div className="gallery-caption">{galleryItem.title}</div>
          </div>
        </section>

        {/* <section className="night-sky-section" ref={starSectionRef}>
          <div className="star-header">
            <h2>Night of Wishes</h2>
            <p>A star-filled universe that keeps the sweetest secrets of your journey.</p>
          </div>
          <div className={`constellation ${showConstellation ? 'visible' : ''}`}>
            <div className="stars stars-2407">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="stars stars-love">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={`star-date ${showStarDate ? 'visible' : ''}`}>{specialDate}</div>
            <div className="star-footer">Some stars shine brighter on special days ✨</div>
          </div>
        </section> */}

        <section className="final-call-to-action">
          <button className="final-button" onClick={openFinal}>
            One Last Surprise
          </button>
        </section>
      </main>

      <div className={`final-overlay ${scene === 'final' ? 'active' : ''}`}>
        <div className="final-background" />
        <div className="final-content">
          <div className="final-banner">Forever glowing in your love story</div>
          <div className="final-text">
            {finalLines.slice(0, lettersShown)}
            <span className="afterglow" />
          </div>
          {finalCompleted && <div className="final-title">{finalTitle}</div>}
        </div>
      </div>
    </div>
  )
}

export default App
