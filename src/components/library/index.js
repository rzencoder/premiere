import React from "react";
import {
  Container,
  Image,
  Button,
  Divider,
  CarouselContainer,
  CarouselGroup,
  CarouselButton,
  Selector,
  SelectorItem,
  CarouselOverlay,
  Panel,
} from "./styles/library";

export default function Library({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Library.Button = function LibraryButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Library.Divider = function LibraryDivider({ ...restProps }) {
  return <Divider {...restProps} />;
};

Library.Image = function LibraryImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Library.CarouselContainer = function LibraryCarouselContainer({
  children,
  ...restProps
}) {
  return <CarouselContainer {...restProps}>{children}</CarouselContainer>;
};

Library.CarouselGroup = function LibraryCarouselGroup({
  children,
  ...restProps
}) {
  return <CarouselGroup {...restProps}>{children}</CarouselGroup>;
};

Library.CarouselButton = function LibraryCarouselButton({
  children,
  ...restProps
}) {
  return <CarouselButton {...restProps}>{children}</CarouselButton>;
};

Library.Selector = function LibrarySelector({ children, ...restProps }) {
  return (
    <Selector {...restProps}>
      <div>{children}</div>
    </Selector>
  );
};

Library.SelectorItem = function LibrarySelectorItem({
  children,
  ...restProps
}) {
  return <SelectorItem {...restProps}>{children}</SelectorItem>;
};

Library.CarouselOverlay = function LibraryCarouselOverlay({ ...restProps }) {
  return <CarouselOverlay {...restProps} />;
};

Library.Panel = function LibraryPanel({ children, ...restProps }) {
  return (
    <Panel {...restProps}>
      <div>{children}</div>
    </Panel>
  );
};
