import WordPullUp from "@/components/magicui/word-pull-up";

export async function WordPullUpDemo() {
  return (
    <WordPullUp
      className="text-3xl md:text-5xl md:text-center font-medium"
      words="Built from the ground up"
    />
  );
}
