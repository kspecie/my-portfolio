import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./EmblaCarousel.module.css";

const videos = ["/placeholder", "/placeholder", "/placeholder", "/placeholder"];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected);

      videoRefs.current.forEach((video) => {
        if (!video) return;

        // Only play the center real slide
        const slide = emblaApi.slideNodes()[selected];
        const isCenter = video === slide.querySelector("video");

        if (isCenter) return; // center slide can play on click
        video.pause();
        video.currentTime = 0;
      });
    };

    emblaApi.on("select", update);
    update();

    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  const handlePlay = (index: number) => {
    if (index !== selectedIndex) return;

    // const video = videoRefs.current[index];
    // video?.play();

    const video = videoRefs.current[index];

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(index);
    } else {
      video.pause();
      setIsPlaying(null);
    }
  };
  

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {videos.map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === selectedIndex ? styles.selected : ""
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={src}
                className={styles.video}
                muted
                // loop
                playsInline
                controls={index === selectedIndex}
                onClick={() => handlePlay(index)}
                onPause={() => setIsPlaying(null)}
                onPlay={() => setIsPlaying(index)}
              />
              {index == selectedIndex && (isPlaying !== index || isHovered == index) && (
                <button
                  className={`${styles.playOverlay} ${
                    isPlaying === index ? styles.pauseOverlay : ""
                  }`}
                  onClick={() => handlePlay(index)}
                  aria-label={
                    isPlaying === index ? "Pause video" : "Play video"}
                  type='button'
                >
                  <span className={styles.playIcon}>
                    {isPlaying === index ? "❚❚" : "▶"}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label='Previous project video'
        className={styles.prev}
        onClick={scrollPrev}
      >
        ‹
      </button>

      <button
        aria-label='Next project video'
        className={styles.next}
        onClick={scrollNext}
      >
        ›
      </button>
    </div>
  );
}