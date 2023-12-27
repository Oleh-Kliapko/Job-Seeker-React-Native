import { View, Text, Pressable, Image } from "react-native";

import styles from "./popularJobCard.style";
import { checkImageURL } from "../../../../helpers";
import { defaultCompanyLogo } from "../../../../constants";

const PopularJobCard = ({ selectedJob, item, handleCardPress }) => {
  const { employer_logo, employer_name, job_title, job_country } = item;

  return (
    <Pressable
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Pressable style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(employer_logo)
              ? employer_logo
              : defaultCompanyLogo,
          }}
          style={{ ...styles.logoImage, resizeMode: "contain" }}
        />
      </Pressable>
      <Text style={styles.companyName} numberOfLines={1}>
        {employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {job_title}
        </Text>
        <Text style={styles.location}>{job_country}</Text>
      </View>
    </Pressable>
  );
};

export default PopularJobCard;
