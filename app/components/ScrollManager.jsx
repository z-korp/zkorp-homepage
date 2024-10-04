import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  const scrollToSection = (targetSection) => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: targetSection * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  useEffect(() => {
    scrollToSection(section);
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    if (data.scroll.current > lastScroll.current) {
      if (curSection !== section && curSection < data.pages) {
        onSectionChange(curSection);
      }
    } else if (data.scroll.current < lastScroll.current) {
      if (curSection !== section && curSection >= 0) {
        onSectionChange(curSection);
      }
    }

    lastScroll.current = data.scroll.current;
  });

  return { scrollToSection };
};
