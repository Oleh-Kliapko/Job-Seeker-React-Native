import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, defaultCompanyLogo } from "../../../constants";
import { checkImageURL } from "../../../helpers";

const Company = ({ data }) => {
  const { employer_logo, job_title, employer_name, job_country } = data;

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(employer_logo)
              ? employer_logo
              : defaultCompanyLogo,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{job_title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{employer_name}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>{job_country}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
