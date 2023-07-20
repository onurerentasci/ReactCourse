import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

function LessonImageList() {
  return (
    <ImageList
      //   sx={{ width: "700px", height: "650px" }}
      cols={3}
      //   rowHeight={164}
      variant="masonry"
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item.img} alt="" loading="lazy" />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default LessonImageList;

const itemData = [
  { img: "https://source.unsplash.com/random/200", title: "test" },
  { img: "https://source.unsplash.com/random/600", title: "test" },
  { img: "https://source.unsplash.com/random/201", title: "test" },
  { img: "https://source.unsplash.com/random/202", title: "test" },
  { img: "https://source.unsplash.com/random/203", title: "test" },
  { img: "https://source.unsplash.com/random/204", title: "test" },
  { img: "https://source.unsplash.com/random/205", title: "test" },
  { img: "https://source.unsplash.com/random/206", title: "test" },
  { img: "https://source.unsplash.com/random/201", title: "test" },
  { img: "https://source.unsplash.com/random/401", title: "test" },
  { img: "https://source.unsplash.com/random/331", title: "test" },
  { img: "https://source.unsplash.com/random/531", title: "test" },
  { img: "https://source.unsplash.com/random/1301", title: "test" },
  { img: "https://source.unsplash.com/random/2011", title: "test" },
  { img: "https://source.unsplash.com/random/2201", title: "test" },
  { img: "https://source.unsplash.com/random/2001", title: "test" },
  { img: "https://source.unsplash.com/random/3101", title: "test" },
  { img: "https://source.unsplash.com/random/231", title: "test" },
  { img: "https://source.unsplash.com/random/21", title: "test" },
  { img: "https://source.unsplash.com/random/200", title: "test" },
  { img: "https://source.unsplash.com/random/600", title: "test" },
  { img: "https://source.unsplash.com/random/201", title: "test" },
  { img: "https://source.unsplash.com/random/202", title: "test" },
  { img: "https://source.unsplash.com/random/203", title: "test" },
  { img: "https://source.unsplash.com/random/204", title: "test" },
  { img: "https://source.unsplash.com/random/205", title: "test" },
  { img: "https://source.unsplash.com/random/206", title: "test" },
  { img: "https://source.unsplash.com/random/201", title: "test" },
  { img: "https://source.unsplash.com/random/401", title: "test" },
  { img: "https://source.unsplash.com/random/331", title: "test" },
];
