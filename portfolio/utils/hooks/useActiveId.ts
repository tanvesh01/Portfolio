import { useEffect, useState } from "react";

export function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState(``);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds.forEach((id) => {
      observer.observe(document.querySelector(id) as Element);
    });

    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.querySelector(id) as Element);
      });
    };
  }, [itemIds]);

  return `#${activeId}`;
}
