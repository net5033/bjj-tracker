import { useState } from "react";
import { View } from "react-native";
import { Appbar, Button, Chip, Text, TextInput } from "react-native-paper";

export default function HomeScreen() {
  const [type, setType] = useState<
    | null
    | "class"
    | "openMat"
    | "competition"
    | "oneOnOneCoaching"
    | "seminar"
    | "media"
    | "other"
  >(null);

  const [locationText, setLocationText] = useState<string>("");
  const [notesText, setNotesText] = useState<string>("");

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Log New Event" />
      </Appbar.Header>
      <View style={{ marginTop: 16, marginLeft: 16 }}>
        <Text variant="labelLarge">Type</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          padding: 16,
        }}
      >
        <Chip
          selected={type === "class"}
          mode="outlined"
          onPress={() => setType("class")}
        >
          Class
        </Chip>
        <Chip
          selected={type === "openMat"}
          mode="outlined"
          onPress={() => setType("openMat")}
        >
          Open Mat
        </Chip>
        <Chip
          selected={type === "competition"}
          mode="outlined"
          onPress={() => setType("competition")}
        >
          Competition
        </Chip>
        <Chip
          selected={type === "oneOnOneCoaching"}
          mode="outlined"
          onPress={() => setType("oneOnOneCoaching")}
        >
          One on One Coaching
        </Chip>
        <Chip
          selected={type === "seminar"}
          mode="outlined"
          onPress={() => setType("seminar")}
        >
          Seminar
        </Chip>
        <Chip
          selected={type === "media"}
          mode="outlined"
          onPress={() => setType("media")}
        >
          Media
        </Chip>
        <Chip
          selected={type === "other"}
          mode="outlined"
          onPress={() => setType("other")}
        >
          Other
        </Chip>
      </View>
      <View>
        <TextInput
          label="Location"
          value={locationText}
          onChangeText={(text) => setLocationText(text)}
          style={{ margin: 16 }}
        />
      </View>
      <View>
        <TextInput
          label="Notes"
          value={notesText}
          onChangeText={(text) => setNotesText(text)}
          style={{ margin: 16 }}
          multiline
          numberOfLines={10}
        />
      </View>
      <View>
        <Button
          mode="contained"
          style={{ margin: 16 }}
          onPress={() => console.log("saving")}
        >
          Save
        </Button>
      </View>
    </View>
  );
}
