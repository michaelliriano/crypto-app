import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Alert } from "react-native";
import Row from "../components/common/Row";
import Tab from "../components/common/Tab";
import Title from "../components/common/Title";
import Card from "../components/common/Card";
import mockApi from "../mock/articles/mockApi";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    mockApi()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const handleTabPress = (v) => {
    Alert.alert("Tab touched " + v);
  };
  const handleCardPress = () => {
    Alert.alert("Card touched");
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingHorizontal: 10,
      marginBottom: 200,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Row>
        <Tab  name="search" color="white" onPress={handleTabPress} />
        <Tab  name="bar-chart" color="white" onPress={handleTabPress} />
        <Tab  name="bookmark-alt" color="white" onPress={handleTabPress} />
        <Tab  name="player-settings" color="white" onPress={handleTabPress} />
      </Row>
      <Title title="Crypto news" />
      {data &&
        data.news.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            img={article.image}
            onPress={handleCardPress}
          />
        ))}
    </ScrollView>
  );
}
