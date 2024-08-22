import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Bird Digital Marketing Studio"
      default_velocity={5}
      className="text-blue-300 font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
