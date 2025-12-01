import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./EmblaCarousel.module.css";

const videos = ["/SampleVideo.mp4", "/SampleVideo.mp4", "/SampleVideo.mp4", "/SampleVideo.mp4"];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected);

      videoRefs.current.forEach((video, i) => {
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

    const video = videoRefs.current[index];
    video?.play();
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
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={src}
                className={styles.video}
                muted
                loop
                playsInline
                controls={index === selectedIndex}
                onClick={() => handlePlay(index)}
              />
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