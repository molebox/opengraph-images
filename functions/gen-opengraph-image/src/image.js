/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Textfit from 'react-textfit';
import { render } from 'react-dom';

export default function App() {
    return (
      <div
        css={{
          width: 1200,
          height: 630,
          backgroundColor: "#DE3C4B",
          position: "absolute",
          display: "flex",
          overflow: "hidden"
        }}
      >
        <Global
          styles={{
            "*": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
              fontFamily: "system-ui"
            }
          }}
        />
        <div
          css={{
            background: "#121212",
            margin: "40px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 15,
            padding: "2rem",
            boxShadow: `
            0 4.6px 1.9px rgba(0, 0, 0, 0.036),
            0 9.4px 4.5px rgba(0, 0, 0, 0.052),
            0 14.8px 8.1px rgba(0, 0, 0, 0.064),
            0 21.5px 13.5px rgba(0, 0, 0, 0.076),
            0 31.4px 22.2px rgba(0, 0, 0, 0.088),
            0 49.6px 38.8px rgba(0, 0, 0, 0.104),
            0 105px 84px rgba(0, 0, 0, 0.14)`
          }}
        >
          <h1
            css={{
              color: "#F2F2F2",
              height: "100%"
            }}
          >
            <Textfit
              max={256}
              min={24}
              style={{
                minHeight: "80%",
                maxHeight: "80%",
                maxWidth: "80%",
                lineHeight: 1
              }}
            >
              How I made opengraph images with serverless functions
            </Textfit>
          </h1>
          <div
            css={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              fontSize: 24
            }}
          >
            <ul
              css={{
                listStyle: "none",
                display: "flex",
                "& li": {
                  marginRight: ".5rem",
                  "&:not(:last-child):after": {
                    content: "'•'",
                    marginLeft: ".5rem"
                  }
                }
              }}
            >
              <li>ideas</li>
              <li>blogging</li>
              <li>thoughts</li>
            </ul>
            <span>@studio_hungry</span>
          </div>
        </div>
      </div>
    );
  }

  render(<App/>, document.getElementById("haines"))