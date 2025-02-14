import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FixtureCard from "../../components/FixtureCard";
import { Helmet } from "react-helmet";
import SetFixtureGamedates from "../../utils/SetFixtureGamedates";
import { a11yProps, TabPanel } from "../../components/TabPanel";
import QuickView from "../../components/QuickView";
import { useLocation } from "react-router-dom";
import "./styles/style.css";
import { getFixtures } from "../../api/Fixture";

export default function Fixture() {
  let params = useLocation();
  const marketplaceSlug = params.state.marketplaceSlug;

  const [fixtures, setFixtures] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fixtures = await getFixtures(marketplaceSlug);
      setFixtures(fixtures?.data?.fixtures);
    })();
  }, []);
  /**
   * @dev states for the tab panel
   */
  const [groupValue, setGroupValue] = React.useState(0);

  const [gameDates, setGameDates] = React.useState({
    all: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    groupE: [],
    groupF: [],
    groupG: [],
    groupH: [],
  });

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = (data) => {
    localStorage.setItem("quickViewItem", JSON.stringify(data));
    setModalOpen(true);
    handleModel();
  };

  const handleModel = () => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  return (
    <div className="fixtures__container">
      <Helmet>
        <title>Fixtures | Playpoint</title>
      </Helmet>

      <SetFixtureGamedates
        marketplaceSlug={marketplaceSlug}
        setGameDates={setGameDates}
      />

      {modalOpen && <QuickView handleModalClose={setModalOpen} />}

      <h1
        style={{
          background: `url("https://ik.imagekit.io/domsan/image_L63diTKkM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669019260350") no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        Fixtures
      </h1>

      {fixtures.length > 0 ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={groupValue}
              onChange={(event, newValue) => {
                setGroupValue(newValue);
              }}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {[
                "all",
                "group a",
                "group b",
                "group c",
                "group d",
                "group e",
                "group f",
                "group g",
                "group h",
              ].map((value, index) => {
                return <Tab label={value} {...a11yProps(index)} key={index} />;
              })}
            </Tabs>
          </Box>

          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={0}
          >
            {gameDates.all.reverse().map((data, index) => {
              return (
                <FixtureCard
                  marketplaceSlug={marketplaceSlug}
                  handleModalOpen={handleModalOpen}
                  group="all"
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={1}
          >
            {gameDates.groupA.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  marketplaceSlug={marketplaceSlug}
                  group="Group A"
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={2}
          >
            {gameDates?.groupB?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group B"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={3}
          >
            {gameDates?.groupC?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group C"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={4}
          >
            {gameDates?.groupD?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group D"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={5}
          >
            {gameDates?.groupE?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group E"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={6}
          >
            {gameDates?.groupF?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group F"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={7}
          >
            {gameDates?.groupG?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group G"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            className="fixtureCardItems__container"
            value={groupValue}
            index={8}
          >
            {gameDates?.groupH?.reverse().map((data, index) => {
              return (
                <FixtureCard
                  handleModalOpen={handleModalOpen}
                  group="Group H"
                  marketplaceSlug={marketplaceSlug}
                  data={data}
                  key={index}
                />
              );
            })}
          </TabPanel>
        </Box>
      ) : (
        <div className="noFixture__container">
          <img
            src="https://ik.imagekit.io/domsan/Screen_Shot_2022-09-24_at_23.37.15_K2oc2jdPc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664041945064"
            alt=""
            loading="lazy"
          />
          <h2>Looks like there are no Fixtures!</h2>
        </div>
      )}
    </div>
  );
}
