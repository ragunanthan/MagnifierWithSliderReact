# react-magnifier-with-slider


Example :

```js
import { Magnifier } from "react-magnifier-with-slider";

<Magnifier
  src={
    "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
  }
  zoomFactor={1.5}
  mgWidth={150}
  mgHeight={150}
  mgBorderWidth={2}
  width={"800px"}
  height={"800px"}
  contentView={[
    {
      imagePositionStyle: {
        top: "10%",
        left: "10%",
      },
      contentPositionStyle: {
        top: "10%",
        left: "30%",
      },
      image:
        "http://media.wbur.org/wp/2022/07/GettyImages-1241857240-RESIZED-1000x579.jpg",
      content:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance d",
    },
    {
      imagePositionStyle: {
        top: "50%",
        left: "50%",
      },
      contentPositionStyle: {
        top: "70%",
        left: "50%",
      },
      image:
        "https://images.theconversation.com/files/223749/original/file-20180619-126537-5l632j.jpg",
      content:
        "Paragraphs are the building blocks of papers. Many students define p",
    },
  ]}
/>
```
