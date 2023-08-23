import Featured from "@/components/Featured";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Slider />
      <Featured />
    </main>
  );
}
