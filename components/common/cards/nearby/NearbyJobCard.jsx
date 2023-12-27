import { View, Text, Pressable, Image } from "react-native";

import styles from "./nearbyJobCard.style";
import { checkImageURL } from "../../../../helpers";
import { defaultCompanyLogo } from "../../../../constants";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const { employer_logo, job_title, job_employment_type } = job;

  return (
    <Pressable style={styles.container} onPress={handleNavigate}>
      <Pressable style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(employer_logo)
              ? employer_logo
              : defaultCompanyLogo,
          }}
          style={{ ...styles.logoImage, resizeMode: "contain" }}
        />
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job_title}
        </Text>
        <Text style={styles.jobType}>{job_employment_type}</Text>
      </View>
    </Pressable>
  );
};

export default NearbyJobCard;
