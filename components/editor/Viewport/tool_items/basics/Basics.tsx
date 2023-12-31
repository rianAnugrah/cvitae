import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import ButtonSvg from "../../../../../public/icons/toolbox/button.svg";
import SquareSvg from "../../../../../public/icons/toolbox/rectangle.svg";
import TypeSvg from "../../../../../public/icons/toolbox/text.svg";
import YoutubeSvg from "../../../../../public/icons/toolbox/video-line.svg";
import { Button } from "../../../../selectors/Button";
import { Container } from "../../../../selectors/Container";
import { Text } from "../../../../selectors/Text";
import { Video } from "../../../../selectors/Video";

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export default function Basics() {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <div className="flex flex-1 flex-col items-center pt-3">
      <div
        ref={(ref) =>
          create(
            ref,
            <Element
              canvas
              is={Container}
              background={{ r: 78, g: 78, b: 78, a: 1 }}
              color={{ r: 0, g: 0, b: 0, a: 1 }}
              height="300px"
              width="300px"
            ></Element>
          )
        }
      >
        <Tooltip title="Container" placement="right">
          <Item className="m-2 pb-2 cursor-pointer block" move>
            <SquareSvg />
          </Item>
        </Tooltip>
      </div>
      <div
        ref={(ref) =>
          create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
        }
      >
        <Tooltip title="Text" placement="right">
          <Item className="m-2 pb-2 cursor-pointer block" move>
            <TypeSvg />
          </Item>
        </Tooltip>
      </div>
      <div ref={(ref) => create(ref, <Button />)}>
        <Tooltip title="Button" placement="right">
          <Item className="m-2 pb-2 cursor-pointer block" move>
            <ButtonSvg />
          </Item>
        </Tooltip>
      </div>
      <div ref={(ref) => create(ref, <Video />)}>
        <Tooltip title="Video" placement="right">
          <Item className="m-2 pb-2 cursor-pointer block" move>
            <YoutubeSvg />
          </Item>
        </Tooltip>
      </div>
    </div>
  );
}
