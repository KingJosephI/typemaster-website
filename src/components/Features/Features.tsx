import Card from "./Card/Card";
import { featuresData } from "./data";
import featuresStyles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={featuresStyles.features}>
      {featuresData.map((feature) => (
        <Card
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon.image}
          height={feature.icon.height}
          width={feature.icon.width}
        />
      ))}
    </section>
  );
};

export default Features;
