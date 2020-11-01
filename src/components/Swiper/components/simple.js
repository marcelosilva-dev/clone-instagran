import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FiSearch, FiSend } from "react-icons/fi";

import "./style.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 500,
      maxHeight: "85%",
      backgroundColor: "#333",
      color: "#fff",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 6,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1",
    text: "__marcelo.silva__",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123036164_357032295400875_6312535979941346_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1RM3zGwmqBcAX90PelS&oh=d92f11574ff2689c9bfa38adf4dcf379&oe=5FCA16AC",
    text: "schumannbier",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123140246_356652022254905_64737024599325617_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=DzY4ewqzXOsAX8aLdHt&oh=5ae7d7fccd38bb80832413a456047bf8&oe=5FC921AE",
    text: "comedycentralbr",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50771809_232993740978377_7951194374363152384_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=FQWDtIagFeIAX_3y11e&oh=94574ff48d1d59c76062693a5377d406&oe=5FCA2DC9",
    text: "scinternacional",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/62071606_310526223225410_5776974700974440448_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=9DtpofsrzCQAX-lulE8&oh=fcbf1d9eb803cfc5f66d9e6f53383bcb&oe=5FCA2BAE",
    text: "netflixbrasil",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/52859535_382600198985859_3739792015068495872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=jKyrOkst17AAX_Qpj7l&oh=dcd05d37cb40302f06fc0a291002fbdd&oe=5FC879D6",
    text: "foxsportsbrasil",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117327048_346080093218628_9083298682963332874_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=In8c4gajEaYAX80CgUl&oh=a75c4c642a49238ad753762210a733dd&oe=5FC97A2B",
    text: "rocketseat_oficial",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26865579_779366182262182_6511703275853578240_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=hcFtnAy89XQAX-uQnma&oh=2f17b552483d2b0a7fa084b154d7837b&oe=5FC6CEFF",
    text: "ceppanambi",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101374873_180416209958722_5598490948372791296_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=l6IYNCTI4IEAX_H950G&oh=6b57245e01aff5cf69f078f75a880fb9&oe=5FC7BF28",
    text: "greenpeacebrasil",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1",
    text: "__marcelo.silva__",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123036164_357032295400875_6312535979941346_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1RM3zGwmqBcAX90PelS&oh=d92f11574ff2689c9bfa38adf4dcf379&oe=5FCA16AC",
    text: "schumannbier",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123140246_356652022254905_64737024599325617_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=DzY4ewqzXOsAX8aLdHt&oh=5ae7d7fccd38bb80832413a456047bf8&oe=5FC921AE",
    text: "comedycentralbr",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50771809_232993740978377_7951194374363152384_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=FQWDtIagFeIAX_3y11e&oh=94574ff48d1d59c76062693a5377d406&oe=5FCA2DC9",
    text: "scinternacional",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/62071606_310526223225410_5776974700974440448_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=9DtpofsrzCQAX-lulE8&oh=fcbf1d9eb803cfc5f66d9e6f53383bcb&oe=5FCA2BAE",
    text: "netflixbrasil",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/52859535_382600198985859_3739792015068495872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=jKyrOkst17AAX_Qpj7l&oh=dcd05d37cb40302f06fc0a291002fbdd&oe=5FC879D6",
    text: "foxsportsbrasil",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117327048_346080093218628_9083298682963332874_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=In8c4gajEaYAX80CgUl&oh=a75c4c642a49238ad753762210a733dd&oe=5FC97A2B",
    text: "rocketseat_oficial",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26865579_779366182262182_6511703275853578240_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=hcFtnAy89XQAX-uQnma&oh=2f17b552483d2b0a7fa084b154d7837b&oe=5FC6CEFF",
    text: "ceppanambi",
  },
  {
    image:
      "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101374873_180416209958722_5598490948372791296_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=l6IYNCTI4IEAX_H950G&oh=6b57245e01aff5cf69f078f75a880fb9&oe=5FC7BF28",
    text: "greenpeacebrasil",
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="header-div">
        <img
          className="header"
          src="https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101374873_180416209958722_5598490948372791296_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=l6IYNCTI4IEAX_H950G&oh=6b57245e01aff5cf69f078f75a880fb9&oe=5FC7BF28"
        />
        greenpeacebrasil 6 h
      </div>

      <div className="content">
        <img
          className="content-img"
          src="https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/e35/123146904_346328796658845_921301493779169160_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FSxTjrpjTXAAX9M8cf6&tp=18&oh=49945bc53281b4daca0eb97ecc882e3a&oe=5FC929F7"
        />
      </div>
      <div className="footer">
        <input placeholder="Enviar mensagem" />
        <FiSend size={30} />
      </div>
    </div>
  );

  return (
    <div>
      <Carousel
        ssr
        partialVisible
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        style={{ margin: 0, padding: 0 }}
      >
        {images.slice(0, 25).map((props) => {
          return (
            <>
              <Image
                onClick={handleOpen}
                draggable={false}
                style={{
                  margin: 0,
                  padding: 0,
                }}
                src={props.image}
              />
              <h6 style={{ overflow: "hidden" }}>{props.text}</h6>
            </>
          );
        })}
        {open && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default Simple;
