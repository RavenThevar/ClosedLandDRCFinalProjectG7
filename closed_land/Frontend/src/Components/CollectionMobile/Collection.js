import React from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Cards from "../Card";
import Ethcall from "../CombNav/Ethcall";
import "./Collection.css";
import Collapsable from "../Collapsable";

function CollectionMobile() {
  let infoItem = [
    // "Recently Listed",
    // "Recently Created",
    // "Recently Sold",
    // "Recently Received",
    // "Ending Soon",
    "Price: Low to High",
    "Price: High to Low",
    // "Highest Last Sale",
    // "Most Viewed",
    // "Most Favourited",
    // "Oldest",
  ];
  const [searchItem, setSearchItem] = React.useState("");
  const [asset, setAsset] = React.useState([]);
  const [collectionInfo, setCollectionInfo] = React.useState([
    {
      name: "",
      creator_name: "",
      banner_img:
        "https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?k=20&m=990697446&s=612x612&w=0&h=WTppK6aV-hj0zM-xZV3_rvN7ULnFDvVuzAHieCCUt3o=",
      twitter: "",
      discord: "",
      instagram: "",
      profile_pic:
        "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png",
    },
  ]);
  let assetArr = [];
  const [collectionVolumeInfo, setCollectionVolumeInfo] = React.useState([
    {
      total_items: "",
      total_owners: "",
      floor_price: "",
      highest_price: "",
      volume_traded: "",
    },
  ]);
  const [collapseItem, setCollapseItem] = React.useState([
    {
      attribute: "",
      attributes_data: [],
      length: "",
    },
  ]);
  let slug_name = "doodles-official";
  console.log(collectionInfo);
  const [infoDropDown, setInfoDropDown] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activate, setActivate] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [popupPicture, setPopupPicture] = React.useState(
    "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
  );
  const [popupName, setPopupName] = React.useState("Items Name");
  const [popupOwner, setPopupOwner] = React.useState("Owners");
  const [popupTraits, setPopupTraits] = React.useState([
    {
      type: "",
      value: "",
      percentage: "",
    },
  ]);
  const [totalSupply, setTotalSupply] = React.useState(0);

  const [popup, setPopup] = React.useState(false);
  const [itemSelect, setItemSelect] = React.useState("All Item");
  const [firstItem, setFirstItem] = React.useState("Single Item");
  const [secondItem, setSecondItem] = React.useState("Bundles");
  const [itemDropDown, setItemDropDown] = React.useState(false);
  const [priceSelect, setPriceSelect] = React.useState("Price: Low to High");
  const [number, setNumber] = React.useState(null);
  const [assetPrice, setAssetPrice] = React.useState(null);
  React.useEffect(() => {
    let collectionArr = [];
    let collectionObj = {};
    let collectionVolArr = [];
    let collectionVolObj = {};
    let collapsableArr = [];
    axios
      .get("https://api.opensea.io/api/v1/collection/" + slug_name)
      .then((res) => {
        console.log(res.data.collection);
        let attributesDetailArr = [];
        let dataAssets = res.data.collection;
        setTotalSupply(dataAssets.stats.total_supply);
        if (dataAssets.stats.total_supply >= 1000) {
          collectionVolObj["total_items"] =
            (dataAssets.stats.total_supply / 1000).toFixed(1) + "k";
        } else {
          collectionVolObj["total_items"] = dataAssets.stats.total_supply;
        }
        if (dataAssets.stats.num_owners >= 1000) {
          collectionVolObj["total_owners"] =
            (dataAssets.stats.num_owners / 1000).toFixed(1) + "k";
        } else {
          collectionVolObj["total_owners"] = dataAssets.stats.num_owners;
        }
        if (dataAssets.stats.floor_price === null) {
          collectionVolObj["floor_price"] = "---";
        } else {
          collectionVolObj["floor_price"] = dataAssets.stats.floor_price;
        }
        if (dataAssets.stats.total_supply >= 1000) {
          collectionVolObj["highest_price"] =
            (dataAssets.stats.total_supply / 1000).toFixed(1) + "k";
        } else {
          collectionVolObj["highest_price"] = dataAssets.stats.total_supply;
        }
        if (dataAssets.stats.total_volume >= 1000) {
          collectionVolObj["volume_traded"] =
            (dataAssets.stats.total_volume / 1000).toFixed(1) + "k";
        } else {
          collectionVolObj["volume_traded"] = dataAssets.stats.total_volume;
        }

        for (var key in dataAssets.traits) {
          attributesDetailArr = [];
          let collapsableObj = {};
          collapsableObj["attribute"] = key;
          collapsableObj["length"] = Object.keys(dataAssets.traits[key]).length;
          for (var newKey in dataAssets.traits[key]) {
            let attributesDetailObj = {};
            attributesDetailObj["attribute_details"] = newKey;
            attributesDetailObj["attribute_details_size"] =
              dataAssets.traits[key][newKey];
            attributesDetailArr.push(attributesDetailObj);
          }
          collapsableObj["attributes_data"] = attributesDetailArr;
          collapsableArr.push(collapsableObj);
          // console.log(attributesDetailArr);
        }
        setCollapseItem(collapsableArr);
        collectionVolArr.push(collectionVolObj);
        setCollectionVolumeInfo(collectionVolArr);
        console.log(collectionVolumeInfo);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.opensea.io/api/v1/assets?collection_slug=" + slug_name)
      .then((res) => {
        console.log(res.data);
        res.data.assets.forEach((element) => {
          assetArr.push(element);
        });
        setAsset(assetArr);
        collectionObj["name"] = assetArr[0].collection.name;
        collectionObj["banner_img"] = assetArr[0].collection.banner_image_url;
        collectionObj["twitter"] =
          "https://twitter.com/" + assetArr[0].collection.twitter_username;
        collectionObj["discord"] = assetArr[0].collection.discord_url;
        collectionObj["instagram"] =
          "https://www.instagram.com/" +
          assetArr[0].collection.instagram_username;
        collectionObj["creator_name"] = assetArr[0].creator.user.username;
        collectionObj["profile_pic"] = assetArr[0].asset_contract.image_url;
        collectionArr.push(collectionObj);
        setCollectionInfo(collectionArr);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    axios
      .get("https://api.opensea.io/api/v1/assets?collection_slug=" + slug_name)
      .then((res) => {
        let update_assets = [];
        res.data.assets.forEach((element) => {
          if (element.name === null) {
            if (element.token_id.includes(searchItem)) {
              update_assets.push(element);
            }
          } else {
            if (element.name.includes(searchItem)) {
              // console.log(element.name);
              update_assets.push(element);
            }
          }
        });
        setAsset(update_assets);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(searchItem);
  }, [searchItem]);
  React.useEffect(() => {
    let tempItem = [];
    let itemArr = [];
    let newItem = [];
    axios
      .get("https://api.opensea.io/api/v1/assets?collection_slug=" + slug_name)
      .then((res) => {
        res.data.assets.forEach((element) => {
          itemArr.push(element);
          if (element.last_sale === null) {
            tempItem.push(0);
          } else {
            tempItem.push(parseInt(element.last_sale.total_price));
          }
        });
        tempItem.sort(function (a, b) {
          return a - b;
        });
        // console.log(tempItem.reverse(), itemArr);
        if (priceSelect.includes("Low to High")) {
          tempItem.map((number, index) => {
            itemArr.forEach((element) => {
              let price_number = null;
              if (element.last_sale === null) {
                price_number = 0;
              } else {
                price_number = parseInt(element.last_sale.total_price);
              }
              if (price_number === number) {
                newItem.push(element);
              }
            });
          });
          setAsset(newItem);
        } else {
          tempItem.reverse();
          tempItem.map((number, index) => {
            itemArr.forEach((element) => {
              let price_number = null;
              if (element.last_sale === null) {
                price_number = 0;
              } else {
                price_number = parseInt(element.last_sale.total_price);
              }
              if (price_number === number) {
                newItem.push(element);
              }
            });
          });
          setAsset(newItem);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [priceSelect]);
  return (
    <div className="mobileCollectionView">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
        rel="stylesheet"
        integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <Ethcall />
      <div className="mobileView">
        <div className="mobileViewContainer">
          <div className="mobileCollection">
            <div
              className="mobileBanner"
              // style="background-image: url('../../../public/Azuki.jpeg');"
            >
              <img
                src={collectionInfo[0].banner_img}
                alt=""
                style={{ height: "230px", width: "100%" }}
              />
            </div>
            <div className="mobileCollectionPicContainer">
              <img
                className="mobileCollectionPic"
                src={collectionInfo[0].profile_pic}
                alt=""
              />
            </div>
            <div className="mobileCollectionNameContainer">
              <h1 className="mobileCollectionName">{collectionInfo[0].name}</h1>
              <span className="mobileCollectionCreator">
                Creator: {collectionInfo[0].creator_name}
              </span>
            </div>
            <div className="mobileSocialMediaContainer">
              <a
                className="mobileSocialLink"
                href={collectionInfo[0].instagram}
              >
                <img
                  className="mobileSocialMedia"
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt=""
                />
              </a>
              <a className="mobileSocialLink" href={collectionInfo[0].twitter}>
                <img
                  className="mobileSocialMedia"
                  src="
            https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt=""
                  href=""
                />
              </a>
              <a className="mobileSocialLink" href={collectionInfo[0].discord}>
                <img
                  className="mobileSocialMedia"
                  src="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mobileItemInfoContainer">
            <div className="mobileEachItemContainer" id="immob">
              <span className="mobileItemNumbers">
                {collectionVolumeInfo[0].total_items}
              </span>
              <span className="mobileItemType">Items</span>
            </div>
            <div className="mobileEachItemContainer" id="onmob">
              <span className="mobileItemNumbers">
                {collectionVolumeInfo[0].total_owners}
              </span>
              <span className="mobileItemType">Owners</span>
            </div>
            <div className="mobileEachItemContainer" id="fpmob">
              <span className="mobileItemNumbers">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                  alt=""
                  style={{ width: "24%" }}
                />
                {collectionVolumeInfo[0].floor_price}
              </span>
              <span className="mobileItemType">Floor Price</span>
            </div>
            <div className="mobileEachItemContainer" id="hpmob">
              <span className="mobileItemNumbers">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                  alt=""
                  style={{ width: "24%" }}
                />
                {collectionVolumeInfo[0].highest_price}
              </span>
              <span className="mobileItemType">Highest Price</span>
            </div>
            <div className="mobileEachItemContainer" id="vtmob">
              <span className="mobileItemNumbers">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                  alt=""
                  style={{ width: "12%" }}
                />
                {collectionVolumeInfo[0].volume_traded}
              </span>
              <span className="mobileItemType">Volume Traded</span>
            </div>
          </div>
          <div className="mobileAssetsnAttributesContainer">
            <div className="mobileAssetsContainer">
              <div className="mobileCardAssets">
                <input
                  className="mobileSearchBar"
                  placeholder="SEARCH"
                  type="text"
                  onChange={(input) => {
                    // console.log(input.key);
                    setSearchItem(input.target.value);
                  }}
                />
              </div>
              <div className="mobileDropDownContainer">
                <div className="mobileItemsDropDown">
                  <div
                    className="mobileItemsDropDownBtn"
                    onClick={() => {
                      setItemDropDown(!itemDropDown);
                    }}
                  >
                    {itemSelect}
                    <i
                      class="fa fa-sort-down"
                      style={{ marginBottom: "7px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {itemDropDown === true ? (
                    <div id="myDropdown" class="dropdown-content">
                      <a
                        href="#"
                        onClick={() => {
                          setItemSelect(firstItem);
                          setFirstItem(itemSelect);
                          setItemDropDown(!itemDropDown);
                        }}
                      >
                        {firstItem}
                      </a>
                      <a
                        href="#"
                        onClick={() => {
                          setItemSelect(secondItem);
                          setSecondItem(itemSelect);
                          setItemDropDown(!itemDropDown);
                        }}
                      >
                        {secondItem}
                      </a>
                    </div>
                  ) : null}
                </div>
                <div className="mobileChangeSizeContainer">
                  <div className="mobileSmallSize">
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                  </div>
                  <div className="mobileBigSize" onClick={() => {}}>
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="mobilePriceDropDown">
                  <div
                    className="mobilePriceDropDownBtn"
                    onClick={() => {
                      setInfoDropDown(!infoDropDown);
                    }}
                  >
                    {priceSelect}
                    <i
                      class="fa fa-sort-down"
                      style={{ marginBottom: "7px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {infoDropDown === true ? (
                    <div id="myDropdown" class="dropdown-content">
                      {infoItem.map((element, index) => {
                        return (
                          <a
                            href="#"
                            onClick={() => {
                              setPriceSelect(element);
                              setInfoDropDown(!infoDropDown);
                            }}
                          >
                            {element}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {asset.map((element, index) => {
                  let asset_name = "";
                  if (element.name === null) {
                    asset_name = element.token_id;
                  } else {
                    asset_name = element.name;
                  }
                  let asset_price = "";
                  if (element.last_sale === null) {
                    asset_price = "--";
                  } else {
                    asset_price = parseInt(element.last_sale.total_price);
                    asset_price = asset_price / 1000000000000000000 + " ETH";
                  }
                  if (element.traits.length < 1) {
                    console.log("hi");
                  } else {
                    return (
                      <Cards
                        key={index}
                        displayDetails={() => {
                          // console.log(element.traits.length);
                          setAssetPrice(asset_price);
                          setPopupName(asset_name);
                          setPopupPicture(element.image_url);
                          // console.log(element.owner.user);
                          if (element.owner.user === null) {
                            setPopupOwner("--");
                          } else {
                            setPopupOwner(element.owner.user.username);
                          }
                          // console.log(element.owner.user.username);
                          setPopup(!popup);
                          let popArr = [];
                          element.traits.map((data, index) => {
                            let popObj = {};
                            popObj["type"] = data.trait_type;
                            popObj["value"] = data.value;
                            let popPercentage =
                              (data.trait_count / totalSupply) * 100;
                            popObj["percentage"] = popPercentage;
                            popArr.push(popObj);
                          });
                          setPopupTraits(popArr);
                        }}
                        ID={1}
                        errorImage="https://www.kcprofessional.co.za/media/150532101/no-image-placeholder.png"
                        setWidth={"50px"}
                        collection={asset_name}
                        collectionName={"5"}
                        imageSource={element.image_url}
                        collectionPrice={asset_price}
                        scoreRating={5}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="mobileFilterContainer">
            <button
              className="mobileFilter"
              onClick={() => {
                setOpenFilter(!openFilter);
                console.log(openFilter);
              }}
            >
              Filter
            </button>
          </div>
          {openFilter === true ? (
            <div
              className="mobileFilterInfoContainer"
              class={openFilter ? "mobileOverlay" : "mobileOverlayOut"}
            >
              <div className="mobileFilterFunctionContainer">
                <div className="mobileButtonsContainer">
                  <button className="buttonClear">Clear All</button>
                  <button
                    className="buttonClose"
                    onClick={() => {
                      setOpenFilter(!openFilter);
                    }}
                  >
                    Done
                  </button>
                </div>
                {collapseItem.map((element, index) => {
                  console.log(element);
                  return (
                    <>
                      <Collapsable
                        key={index}
                        function={() => {
                          if (number === index) {
                            setNumber(null);
                          } else {
                            setNumber(index);
                          }
                        }}
                        className="collapsible"
                        name={element.attribute}
                        totalNumber={element.length}
                      />
                      {number === index ? (
                        <div className="content">
                          <div className="laptopCheckboxDropdownContainer">
                            {element.attributes_data.map((data, index_data) => {
                              console.log(data);
                              return (
                                <div
                                  key={index_data}
                                  className="laptopCheckboxContainer"
                                >
                                  <input
                                    type="checkbox"
                                    className="check"
                                    id="I1"
                                    name="I1"
                                    value={"Item 1"}
                                  />
                                  <label htmlFor="I1">
                                    {data.attribute_details} ({" "}
                                    {data.attribute_details_size} )
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}
                    </>
                  );
                  // console.log(element);
                })}
              </div>
            </div>
          ) : (
            <div class="mobileOverlayOut"></div>
          )}
          {popup === true ? (
            <div id="popup1" className="mobilePopupContainer" class="overlay">
              <div class="mobilePopup">
                <button class="close" href="#" onClick={() => setPopup(null)}>
                  &times;
                </button>
                <div className="mobileDisplayImageWrapper">
                  <img
                    className="mobileDisplayImage"
                    src={popupPicture}
                    alt=""
                  />
                </div>
                <div className="mobileInfosContainer">
                  <div className="mobileOwnersContainer">
                    <span className="mobileItemName">{popupName}</span>
                    <span className="mobileItemOwnedBy">
                      Owned by: {popupOwner}
                    </span>
                  </div>
                  <div className="mobileAttributeContainer">
                    <span className="mobileItemName">Attributes:</span>
                  </div>
                  <div className="mobileCardAttributesContainer">
                    {popupTraits.map((element, index) => {
                      return (
                        <div className="mobileCardAttributes">
                          <div className="mobileCardTitle">
                            <span>{element.type.toUpperCase()}</span>
                          </div>
                          <div className="mobileCardContent">
                            <span className="mobileValue">{element.value}</span>
                            <span className="mobileRarity">
                              Rarity: {element.percentage.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mobilePriceInfoContainer">
                    <div className="favContainer">
                      <button
                        className="favButton"
                        onClick={() => {
                          setActivate(!activate);
                        }}
                      >
                        {activate === false ? (
                          <i class="fa fa-heart-o"></i>
                        ) : (
                          <i class="fa fa-heart"></i>
                        )}
                      </button>
                    </div>
                    <div className="totalPriceContainer">
                      <span>{assetPrice}</span>
                      <img
                        className="ethereumImg"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png?20161015085252"
                        alt=""
                      />
                    </div>
                    <div className="buyButtonContainer">
                      <button className="buyButton">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CollectionMobile;
