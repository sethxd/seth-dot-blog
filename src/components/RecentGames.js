import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const RecentGames = () => {
  const games = useStaticQuery(graphql`
    query {
      allNotion(
        sort: { fields: properties___Last_played___value___start, order: DESC }
        limit: 20
      ) {
        nodes {
          title
          id
          properties {
            Last_played {
              value {
                start(formatString: "MMMM D")
              }
            }
            Platform {
              value {
                name
              }
            }
            Progress {
              value {
                name
              }
            }
          }
        }
      }
    }
  `)

  const recentGames = games.allNotion.nodes.map(item => (
    <div
      key={item.id}
      className={`relative m-4 px-4 py-6 flex flex-grow justify-between items-center w-full sm:w-auto last:flex-grow-0 ${
        item.properties.Platform.value.name === "Playstation"
          ? "bg-[#2E65E6] text-white"
          : ""
      }${
        item.properties.Platform.value.name === "PC"
          ? "bg-black text-white"
          : ""
      }${
        item.properties.Platform.value.name === "Switch"
          ? "bg-[#DD000E] text-white"
          : ""
      }${
        item.properties.Platform.value.name === "Game Boy Advance"
          ? "bg-[#2517C2] text-white"
          : ""
      }${
        item.properties.Platform.value.name === "Vita"
          ? "bg-[#333333] text-white"
          : ""
      }`}
    >
      <span className="mr-4">{item.title}</span>
      <span className="absolute -top-2 -left-1 text-xs bg-white text-black p-1 border border-black">
        {item.properties.Last_played.value.start}
      </span>
      <span
        className={`absolute -bottom-3 -right-1 text-xs p-1 ${
          item.properties.Progress.value.name === "Started" &&
          "bg-amber-300 text-black"
        }
        ${
          item.properties.Progress.value.name === "Completed" &&
          "bg-green-200 text-black"
        }
        ${
          item.properties.Progress.value.name === "100%" &&
          "bg-purple-800 text-white"
        }
        ${
          item.properties.Progress.value.name === "Dropped" &&
          "bg-gray-300 text-black"
        }`}
      >
        {item.properties.Progress.value.name}
      </span>
      {item.properties.Platform.value.name === "Playstation" && (
        <StaticImage
          className="w-6 invert"
          alt="Playstation"
          title="Playstation"
          src="../static/playstation-icon.svg"
        />
      )}
      {item.properties.Platform.value.name === "PC" && (
        <StaticImage
          className="invert grayscale saturate-200 contrast-150 w-6"
          alt="PC"
          title="PC"
          src="../static/steam-logo.svg"
        />
      )}
      {item.properties.Platform.value.name === "Switch" && (
        <StaticImage
          className="invert w-6"
          alt="PC"
          title="PC"
          src="../static/switch.svg"
        />
      )}
      {item.properties.Platform.value.name === "Vita" && (
        <StaticImage
          className="invert w-16"
          alt="Vita"
          title="Vita"
          src="../static/vita.svg"
        />
      )}
      {item.properties.Platform.value.name === "Game Boy Advance" && (
        <StaticImage
          className="w-32"
          alt="GBA"
          title="GBA"
          src="../static/gba.svg"
        />
      )}
    </div>
  ))

  return (
    <section className="flex justify-between flex-wrap mt-4">
      {recentGames}
    </section>
  )
}

export default RecentGames
