import { useState } from "react";

const internships = [
  {
    id: 1,
    company: "ร้านบุญสหะคอมพิวเตอร์",
    location: "จ.ราชบุรี",
    icon: "🖥️",
    level: "ระดับ ปวส.",
    levelColor: { bg: "#c8d8b033", text: "#3b6010" },
    period: "27 ก.พ. 2566 — 6 พ.ค. 2566",
    tasks: ["ซ่อมเครื่องปริ้นเตอร์", "ซ่อมคอมพิวเตอร์", "ลงวินโดว์", "จัดสต็อกสินค้ากล้องวงจรปิด"],
  },
];

const activities = [
  {
    id: 1,
    title: "ศึกษาดูงานก่อสร้าง โครงการสร้างสถานีไฟฟ้าย่อยโรงงานผลิตน้ำมหาสวัสดิ์",
    role: "ผู้เข้าร่วม",
    organizer: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    year: "ปีการศึกษา 2567",
    description: "รายวิชา Design Thinking",
    images: [
      "/certificates/act1.jpg",
      "/certificates/act2.jpg",
      "/certificates/act3.jpg",
    ],
  },
];

const awards = [
  {
    id: 1,
    title: "การแข่งขันทักษะ การประกวดผลงานสะเต็มศึกษา (STEM Education)",
    year: "ปีการศึกษา 2565",
    result: "รางวัลชนะเลิศ",
    file: "/certificates/award1.pdf",
  },
  {
    id: 2,
    title: "การประกวดผลงานสะเต็มศึกษา (STEM Education) ระดับ ปวส.",
    year: "ปีการศึกษา 2565",
    result: "รางวัลชนะเลิศ มาตรฐานระดับเหรียญทอง",
    file: "/certificates/award2.pdf",
  },
  {
    id: 3,
    title: "การประกวดผลงานสะเต็มศึกษา (STEM Education) ระดับ ปวส.",
    year: "ปีการศึกษา 2565",
    result: "เข้าร่วม มาตรฐานระดับเหรียญเงิน",
    file: "/certificates/award3.pdf",
  },
];

// ---- Lightbox ----
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0,
      background: "rgba(26,15,8,0.85)",
      zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <button onClick={onClose} style={{
        position: "absolute", top: "20px", right: "24px",
        background: "none", border: "none",
        color: "#e8d8c0", fontSize: "1.8rem",
        cursor: "pointer", lineHeight: 1,
      }}>✕</button>

      {index > 0 && (
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
          position: "absolute", left: "20px",
          background: "rgba(253,249,244,0.15)",
          border: "1px solid rgba(232,216,192,0.4)",
          color: "#e8d8c0", borderRadius: "50%",
          width: "44px", height: "44px", fontSize: "1.2rem",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>‹</button>
      )}

      <img src={images[index]} alt={`img-${index}`} onClick={e => e.stopPropagation()} style={{
        maxWidth: "88vw", maxHeight: "82vh",
        objectFit: "contain", borderRadius: "12px",
        boxShadow: "0 16px 64px rgba(0,0,0,0.5)",
      }} />

      {index < images.length - 1 && (
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
          position: "absolute", right: "20px",
          background: "rgba(253,249,244,0.15)",
          border: "1px solid rgba(232,216,192,0.4)",
          color: "#e8d8c0", borderRadius: "50%",
          width: "44px", height: "44px", fontSize: "1.2rem",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>›</button>
      )}

      <div style={{
        position: "absolute", bottom: "20px",
        color: "#d4bc98", fontSize: "0.82rem", letterSpacing: "0.1em",
      }}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// ---- ImageGrid ----
function ImageGrid({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  if (!images || images.length === 0) return null;
  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px", marginTop: "14px",
      }}>
        {images.map((src, i) => (
          <div key={i} onClick={() => setLightboxIndex(i)} style={{
            position: "relative", paddingTop: "75%",
            borderRadius: "10px", overflow: "hidden",
            cursor: "pointer", border: "1px solid #e8d8c0",
          }}>
            <img src={src} alt={`img-${i}`} style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", transition: "transform 0.3s ease",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(26,15,8,0)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem", color: "transparent",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(26,15,8,0.3)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(26,15,8,0)";
                e.currentTarget.style.color = "transparent";
              }}
            >🔍</div>
          </div>
        ))}
      </div>
      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(i => i - 1)}
        onNext={() => setLightboxIndex(i => i + 1)}
      />
    </>
  );
}

// ---- Section heading ----
function SectionHeading({ emoji, title }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "1.6rem", fontWeight: 600,
      color: "#1a0f08", marginBottom: "20px",
      display: "flex", alignItems: "center", gap: "12px",
    }}>
      {emoji} {title}
      <span style={{ flex: 1, height: "1px", background: "#e8d8c0", display: "inline-block" }} />
    </h2>
  );
}

// ---- Project page ----
function Project() {
  return (
    <div className="about">

      <h1 className="about-title" style={{ color: "#1a0f08" }}>Activities & Awards</h1>

      {/* ============ 1. ACTIVITIES ============ */}
      <SectionHeading emoji="📌" title="กิจกรรมที่เข้าร่วม" />

      <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "760px", margin: "0 auto 56px" }}>
        {activities.map((act) => (
          <div key={act.id} style={{
            background: "#fdf9f4",
            border: "1px solid #e8d8c0",
            borderRadius: "16px", padding: "20px 24px",
            transition: "box-shadow 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(110,75,40,0.10)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: "64px", textAlign: "center", paddingTop: "2px" }}>
                <span style={{ fontSize: "0.72rem", color: "#6b4f32", fontWeight: 500 }}>{act.year}</span>
              </div>
              <div style={{ width: "1px", background: "#d4bc98", alignSelf: "stretch", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem", fontWeight: 600,
                    color: "#1a0f08", margin: 0,
                  }}>{act.title}</h3>
                  <span style={{
                    fontSize: "0.72rem", padding: "2px 10px",
                    borderRadius: "99px", background: "#e8d8c0",
                    color: "#4e3822", fontWeight: 500,
                  }}>{act.role}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#6b4f32", margin: "0 0 4px" }}>{act.organizer}</p>
                <p style={{ fontSize: "0.85rem", color: "#4e3822", margin: 0, lineHeight: 1.6 }}>{act.description}</p>
              </div>
            </div>
            <ImageGrid images={act.images} />
          </div>
        ))}
      </div>

      {/* ============ 2. INTERNSHIP ============ */}
      <SectionHeading emoji="💼" title="ประสบการณ์ฝึกงาน" />

      <div style={{
        display: "flex", flexDirection: "column", gap: "14px",
        maxWidth: "760px", margin: "0 auto 56px",
      }}>
        {internships.map((intern) => (
          <div key={intern.id} style={{
            background: "#fdf9f4",
            border: "1px solid #e8d8c0",
            borderRadius: "16px", padding: "20px 24px",
            position: "relative", overflow: "hidden",
            transition: "box-shadow 0.25s, transform 0.25s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(110,75,40,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "4px", height: "100%",
              background: "#c9972e", borderRadius: "16px 0 0 16px",
            }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", paddingLeft: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.3rem" }}>{intern.icon}</span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem", fontWeight: 600,
                  color: "#1a0f08", margin: 0,
                }}>
                  {intern.company}
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "#6b4f32", marginLeft: "8px" }}>
                    {intern.location}
                  </span>
                </h3>
              </div>
              <span style={{
                fontSize: "0.72rem", padding: "3px 12px",
                borderRadius: "99px",
                background: intern.levelColor.bg,
                color: intern.levelColor.text,
                fontWeight: 500, whiteSpace: "nowrap",
              }}>
                {intern.level}
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#6b4f32", margin: "0 0 12px", paddingLeft: "8px" }}>
              {intern.period}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingLeft: "8px" }}>
              {intern.tasks.map((task, i) => (
                <span key={i} style={{
                  padding: "4px 14px",
                  border: "1px solid #d4bc98",
                  borderRadius: "99px",
                  fontSize: "0.78rem",
                  color: "#4e3822",
                  background: "#fdf9f4",
                }}>
                  {task}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ============ 3. AWARDS ============ */}
      <SectionHeading emoji="🏆" title="รางวัลที่ได้รับ" />

      <div style={{
        display: "flex", flexDirection: "column", gap: "14px",
        maxWidth: "760px", margin: "0 auto 56px",
      }}>
        {awards.map((award) => (
          <div key={award.id} style={{
            background: "#fdf9f4",
            border: "1px solid #e8d8c0",
            borderRadius: "16px", padding: "20px 24px",
            display: "flex", alignItems: "center", gap: "16px",
            position: "relative", overflow: "hidden",
            transition: "box-shadow 0.25s, transform 0.25s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(110,75,40,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "4px", height: "100%",
              background: "#c9972e", borderRadius: "16px 0 0 16px",
            }} />
            <div style={{
              flexShrink: 0, width: "44px", height: "44px",
              borderRadius: "50%", background: "#e8c46a33",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.3rem", marginLeft: "8px",
            }}>🏅</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem", fontWeight: 600,
                  color: "#1a0f08", margin: 0,
                }}>{award.title}</h3>
                <span style={{
                  fontSize: "0.7rem", padding: "2px 10px",
                  borderRadius: "99px", background: "#e8c46a33",
                  color: "#7a5520", fontWeight: 500,
                }}>{award.result}</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#6b4f32", margin: 0 }}>{award.year}</p>
            </div>
            {award.file && (
              <a href={award.file} download style={{
                flexShrink: 0, padding: "8px 18px",
                border: "1.5px solid #c0a07a", borderRadius: "99px",
                background: "transparent", color: "#6b4f32",
                fontSize: "0.78rem", letterSpacing: "0.08em",
                textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#e8d8c0"; e.currentTarget.style.color = "#1a0f08"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b4f32"; }}
              >⬇ ดาวน์โหลด</a>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Project;