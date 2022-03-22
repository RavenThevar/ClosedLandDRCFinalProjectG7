import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Cards from "../Card";
import React from "react";
import "./Collection.css";
import axios from "axios";
import Collapsable from "../Collapsable";
import PropTypes from "prop-types";
import Ethcall from "../../Components/CombNav/Ethcall";

const CollectionLaptop = (props) => {
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
  let default_collectionInfo = [
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
  ];
  let slug_name = "boredapeyachtclub";
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
    setCollectionInfo(default_collectionInfo);
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
  console.log(collectionInfo);
  const [infoDropDown, setInfoDropDown] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activate, setActivate] = React.useState(false);

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
  return (
    <div id="laptopCollectionView">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
        rel="stylesheet"
        integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      {/* <Ethcall /> */}
      {/* <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} /> */}
      <div className="laptopView">
        <div className="laptopViewContainer">
          <div className="laptopCollection">
            <div className="laptopBanner">
              <img
                src={collectionInfo[0].banner_img}
                alt=""
                style={{ height: "230px", width: "100%" }}
              />
            </div>
            <div className="laptopCollectionPicContainer">
              <img
                className="laptopCollectionPic"
                src={collectionInfo[0].profile_pic}
                alt=""
              />
            </div>
            <div className="laptopCollectionNameContainer">
              <h1 className="laptopCollectionName">{collectionInfo[0].name}</h1>
              <span className="laptopCollectionCreator">
                Creator: {collectionInfo[0].creator_name}
              </span>
            </div>
            <div className="laptopSocialMediaContainer">
              <a
                className="laptopSocialLink"
                href={collectionInfo[0].instagram}
              >
                <img
                  className="laptopSocialMedia"
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt=""
                />
              </a>
              <a className="laptopSocialLink" href={collectionInfo[0].twitter}>
                <img
                  className="laptopSocialMedia"
                  src="
            https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt=""
                  href=""
                />
              </a>
              <a className="laptopSocialLink" href={collectionInfo[0].discord}>
                <img
                  className="laptopSocialMedia"
                  src="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
                  alt=""
                />
              </a>
            </div>
            <div className="laptopItemInfoContainer">
              <div className="laptopEachItemContainer" id="im">
                <span className="laptopItemNumbers">
                  {collectionVolumeInfo[0].total_items}
                </span>
                <span className="laptopItemType">Items</span>
              </div>
              <div className="laptopEachItemContainer" id="on">
                <span className="laptopItemNumbers">
                  {collectionVolumeInfo[0].total_owners}
                </span>
                <span className="laptopItemType">Owners</span>
              </div>
              <div className="laptopEachItemContainer" id="fp">
                <span className="laptopItemNumbers">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                    alt=""
                    style={{ width: "24%" }}
                  />

                  {collectionVolumeInfo[0].floor_price}
                </span>
                <span className="laptopItemType">Floor Price</span>
              </div>
              <div className="laptopEachItemContainer" id="hp">
                <span className="laptopItemNumbers">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                    alt=""
                    style={{ width: "24%" }}
                  />

                  {collectionVolumeInfo[0].highest_price}
                </span>
                <span className="laptopItemType">Highest Price</span>
              </div>
              <div className="laptopEachItemContainer" id="vt">
                <span className="laptopItemNumbers">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                    alt=""
                    style={{ width: "24%" }}
                  />
                  {collectionVolumeInfo[0].volume_traded}
                </span>
                <span className="laptopItemType">Volume Traded</span>
              </div>
            </div>
          </div>
          {openFilter === true ? (
            <div className="laptopAssetsnAttributesContainer">
              <div className="laptopAttributesContainer">
                <button
                  className="laptopFilter"
                  onClick={() => {
                    setOpenFilter(!openFilter);
                  }}
                >
                  <div className="buttonContainer">
                    <i class="fa fa-filter" aria-hidden="true"></i>
                    Filter
                  </div>
                  <div>
                    <i
                      class="fa fa-arrow-left"
                      style={{ marginRight: "10px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                </button>
                {collapseItem.map((element, index) => {
                  // console.log(element);
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
              <div className="laptopAssetsContainer">
                <div className="laptopCardAssets">
                  <input
                    className="laptopSearchBar"
                    placeholder="SEARCH"
                    type="text"
                    onChange={(input) => {
                      // console.log(input.key);
                      setSearchItem(input.target.value);
                    }}
                  />
                  <div className="laptopDropDownContainer">
                    <div className="laptopItemsDropDown">
                      <div
                        className="laptopItemsDropDownBtn"
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
                    <div className="laptopPriceDropDown">
                      <div
                        className="laptopPriceDropDownBtn"
                        className="laptopPriceDropDownBtn"
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
                    <div className="laptopChangeSizeContainer">
                      <div className="laptopSmallSize">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div className="laptopBigSize" onClick={() => {}}>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
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
                        asset_price =
                          asset_price / 1000000000000000000 + " ETH";
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
            </div>
          ) : (
            <div className="laptopAssetsnAttributesContainerOff">
              <div className="laptopAttributesContainerOff">
                <button
                  className="laptopFilterOff"
                  onClick={() => {
                    setOpenFilter(!openFilter);
                  }}
                >
                  <div className="buttonContainerOff">
                    <i
                      class="fa fa-arrow-right"
                      style={{ marginRight: "10px" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                </button>
              </div>
              <div className="laptopAssetsContainerOff">
                <div className="laptopCardAssets">
                  <input
                    className="laptopSearchBar"
                    placeholder="SEARCH"
                    type="text"
                    onChange={(input) => {
                      setSearchItem(input.target.value);
                    }}
                  />
                  <div className="laptopDropDownContainer">
                    <div className="laptopItemsDropDown">
                      <div
                        className="laptopItemsDropDownBtn"
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
                    <div className="laptopPriceDropDown">
                      <div
                        className="laptopPriceDropDownBtn"
                        className="laptopPriceDropDownBtn"
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
                    <div className="laptopChangeSizeContainer">
                      <div className="laptopSmallSize">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div className="laptopBigSize" onClick={() => {}}>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
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
                        asset_price =
                          asset_price / 1000000000000000000 + " ETH";
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
            </div>
          )}
          {popup === true ? (
            <div id="popup1" className="laptopPopupContainer" class="overlay">
              <div class="laptopPopup">
                <button class="close" href="#" onClick={() => setPopup(null)}>
                  &times;
                </button>
                <div className="laptopPopupImagenAttributes">
                  <div className="laptopDisplayImageWrapper">
                    <img
                      className="laptopDisplayImage"
                      src={popupPicture}
                      alt="https://www.kcprofessional.co.za/media/150532101/no-image-placeholder.png"
                    />
                  </div>
                  <div className="laptopInfosContainer">
                    <div className="laptopOwnersContainer">
                      <span className="laptopItemName">{popupName}</span>
                      <span className="laptopItemOwnedBy">
                        Owned by: {popupOwner}
                      </span>
                    </div>
                    <div className="laptopAttributeContainer">
                      <span className="laptopItemName">Attributes:</span>
                    </div>
                    <div className="laptopCardAttributesContainer">
                      {popupTraits.map((element, index) => {
                        return (
                          <div className="laptopCardAttributes">
                            <div className="laptopCardTitle">
                              <span>{element.type.toUpperCase()}</span>
                            </div>
                            <div className="laptopCardContent">
                              <span className="laptopValue">
                                {element.value}
                              </span>
                              <span className="laptopRarity">
                                Rarity: {element.percentage.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="laptopPriceInfoContainer">
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
            </div>
          ) : null}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CollectionLaptop;
