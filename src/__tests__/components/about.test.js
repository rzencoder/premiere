import React from "react";
import { render } from "@testing-library/react";
import { About } from "../../components";
import aboutData from "../../data/about.json";

describe("<About />", () => {
  it("renders <About /> component", () => {
    const { container, getByText, getByAltText } = render(
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
        <About.Divider rotate="true" />
      </>
    );

    expect(getByText("Watch")).toBeTruthy();
    expect(getByText("Download")).toBeTruthy();
    expect(getByText("Unlimited")).toBeTruthy();
    expect(getByAltText("Unlimited")).toBeTruthy();
    expect(
      getByText("Stream anytime on your TV, Laptop, Table, PS4 and Mobile")
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
