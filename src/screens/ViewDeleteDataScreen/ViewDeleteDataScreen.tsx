import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "src/screens/ViewDeleteDataScreen/styles";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { fire_db } from "src/config/firebaseConfig";

type dataProps = {
  name: string;
  department: string;
  collegeRoll: string;
  universityRoll: number;
  id: string;
};

const ViewDeleteDataScreen = () => {
  const currentStyles = styles();
  const [data, setData] = useState<dataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getRef = collection(fire_db, "collegeData");

    const docs = onSnapshot(getRef, {
      next: (snapshot) => {
        const data: any[] = [];
        snapshot.docs.forEach((doc) => {
          data.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setData(data);
        setIsLoading(false);
      },
    });
    return () => {
      docs();
    };
  }, []);

  const deletData = (id) => {
    const deleteRef = doc(fire_db, `collegeData/${id}`);
    deleteDoc(deleteRef);
  };

  return (
    <View style={currentStyles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={currentStyles.flatlistContainer}>
              <View style={currentStyles.leftContainer}>
                <View style={currentStyles.cardInnerStyle}>
                  <Text style={currentStyles.titleTextStyle}>
                    Name of the Student:{" "}
                  </Text>
                  <Text style={currentStyles.dataTextStyle}>{item.name}</Text>
                </View>
                <View style={currentStyles.cardInnerStyle}>
                  <Text style={currentStyles.titleTextStyle}>Department: </Text>
                  <Text style={currentStyles.dataTextStyle}>
                    {item.department}
                  </Text>
                </View>
                <View style={currentStyles.cardInnerStyle}>
                  <Text style={currentStyles.titleTextStyle}>
                    College Roll Number:{" "}
                  </Text>
                  <Text style={currentStyles.dataTextStyle}>
                    {item.collegeRoll}
                  </Text>
                </View>
                <View style={currentStyles.cardInnerStyle}>
                  <Text style={currentStyles.titleTextStyle}>
                    University Roll Number:{" "}
                  </Text>
                  <Text style={currentStyles.dataTextStyle}>
                    {item.universityRoll}
                  </Text>
                </View>
              </View>
              <View style={currentStyles.rightContainer}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("", "Are You Sure?", [
                      {
                        text: "No",
                        onPress: () => {},
                      },
                      {
                        text: "Yes",
                        onPress: () => {
                          deletData(item.id);
                        },
                      },
                    ]);
                  }}
                >
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View style={currentStyles.emptyFieldStyle}>
              {isLoading ? (
                <>
                  <ActivityIndicator size="large" />
                </>
              ) : (
                <Text style={currentStyles.titleTextStyle}>
                  No Data Available
                </Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ViewDeleteDataScreen;
