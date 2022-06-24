import ContentContainer from "../ContentContainer";
import ScrollViewContainer from "../ScrollViewContainer";
import SectionHeading from "../SectionHeading";

const StorySection = () => {
  return (
    <section className="mt-10 mb-10 px-4">
      <ContentContainer className="">
        <SectionHeading className="mb-4">My Story</SectionHeading>
        <ScrollViewContainer>
          <p>
            I&apos;ve been into technology, especially software, ever since I was a little kid. I
            remember I used to do stuff like download tons of apps or try to jailbreak my phone just
            because I thought playing with software was so fun. I also spent much of my time
            browsing websites or playing video games, and I was always curious about how they work
            behind the scenes. When it came time for me to choose a career path, coding seemed only
            natural for me, since it follows that curiosity for software I&apos;ve always had. Now
            we are here, where I can create my own software through code. I get to make cool web
            apps that can be useful tools in solving problems, and I love every second of it.
          </p>
        </ScrollViewContainer>
      </ContentContainer>
    </section>
  );
};

export default StorySection;
