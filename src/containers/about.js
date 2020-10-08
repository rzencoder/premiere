import React from "react";
import { About } from "../components";
import aboutData from "../data/about.json";

export default function AboutContainer() {
  return (
    <>
      <About.Divider />
      <About>
        {aboutData.map((item) => {
          return (
            <About.Item key={item.title}>
              <About.Icon
                src={`/images/icons/${item.icon}.png`}
                alt={item.title}
              />
              <About.Title>{item.title}</About.Title>
              <About.Text>{item.text}</About.Text>
            </About.Item>
          );
        })}
      </About>
      <About.Divider />
    </>
  );
}
