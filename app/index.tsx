import { Stack } from "expo-router";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* Header Image Section */}
        <View style={styles.headerImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
            }}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay} />

          {/* Top Action Buttons */}
          <View style={styles.topButtonsContainer}>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.buttonIcon}>✕</Text>
            </TouchableOpacity>
            <View style={styles.rightButtons}>
              <TouchableOpacity style={styles.circleButton}>
                <Text style={styles.buttonIcon}>🔍</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleButton}>
                <Text style={styles.buttonIcon}>♡</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleButton}>
                <Text style={styles.buttonIcon}>⋯</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Welcome Banner */}
          <View style={styles.welcomeBanner}>
            <Text style={styles.welcomeTitle}>Welcome</Text>
            <Text style={styles.welcomeDescription}>
              Authentic Chinese cuisine. Shanghai Style Fried Noodles. Steamed
              Pork Dumplings. Generous portions.
            </Text>
          </View>
        </View>

        {/* Restaurant Info Section */}
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>
            Great Taste Chinese Restaurant
          </Text>
          <Text style={styles.chineseName}>鄭家莊</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>4.6 ⭐</Text>
            <Text style={styles.ratingDetails}>
              (3,000+) • $0.99 Delivery Fee + $2.50-$6.50
            </Text>
          </View>

          <Text style={styles.serviceInfo}>Service Fee • 12.7 km</Text>

          <View style={styles.availabilityContainer}>
            <Text style={styles.availabilityIcon}>🕐</Text>
            <Text style={styles.availabilityText}>
              Available Wednesday 4:00 PM
            </Text>
          </View>
        </View>
        {/* Delivery Options */}
        <View style={styles.deliveryOptionsContainer}>
          <View style={styles.deliveryTabs}>
            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}>
              <Text style={styles.inactiveTabText}>Pickup</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.groupOrderButton}>
            <Text style={styles.groupOrderIcon}>👥</Text>
            <Text style={styles.groupOrderText}>Group order</Text>
          </TouchableOpacity>
        </View>

        {/* Fee Information Cards */}
        <View style={styles.feeCardsContainer}>
          <View style={styles.feeCard}>
            <Text style={styles.feeCardTitle}>
              $0.99 Delivery Fee + $2.50-$6.50 Service Fee
            </Text>
            <Text style={styles.feeCardLink}>Pricing & fees ℹ️</Text>
          </View>
          <View style={styles.feeCard}>
            <Text style={styles.closedText}>Closed</Text>
            <Text style={styles.deliveryTimeText}>Delivery time</Text>
          </View>
        </View>

        {/* Featured Items Section  by Louis li */}
        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>Featured Items</Text>
          <View
            style={{ flexDirection: "row", paddingHorizontal: 20, gap: 12 }}
          >
            {/* Food Card 1 */}
            <View style={styles.foodCard}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
                }}
                style={styles.foodImage}
              />
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.foodName}>Shanghai Style Fried Noodles</Text>
              <Text style={styles.foodNameChinese}>上海炒麵</Text>
              <View style={styles.foodFooter}>
                <Text style={styles.foodPrice}>$12.99</Text>
                <Text style={styles.foodRating}>4.5 ⭐ (500+)</Text>
              </View>
            </View>

            {/* Food Card 2 */}
            <View style={styles.foodCard}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
                }}
                style={styles.foodImage}
              />
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.foodName}>Steamed Pork Dumplings</Text>
              <Text style={styles.foodNameChinese}>小籠包</Text>
              <View style={styles.foodFooter}>
                <Text style={styles.foodPrice}>$8.99</Text>
                <Text style={styles.foodRating}>4.7 ⭐ (800+)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Alert Button */}
        <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImageContainer: {
    position: "relative",
    height: 180,
  },
  headerImage: {
    width: "100%",
    height: 180,
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  topButtonsContainer: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  circleButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(60, 60, 60, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  buttonIcon: {
    fontSize: 24,
    color: "#fff",
  },
  rightButtons: {
    flexDirection: "row",
  },
  welcomeBanner: {
    position: "absolute",
    top: 70,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(200, 67, 45, 0.85)",
    padding: 16,
    paddingBottom: 18,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  welcomeDescription: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
  restaurantInfo: {
    padding: 16,
    paddingTop: 18,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  chineseName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  rating: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  ratingDetails: {
    fontSize: 15,
    color: "#545454",
    marginLeft: 4,
  },
  serviceInfo: {
    fontSize: 15,
    color: "#545454",
    textAlign: "center",
    marginBottom: 8,
  },
  availabilityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  availabilityIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  availabilityText: {
    fontSize: 15,
    color: "#545454",
  },

  deliveryOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  deliveryTabs: {
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
    padding: 4,
  },
  activeTab: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  activeTabText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  inactiveTab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  inactiveTabText: {
    fontSize: 15,
    color: "#6B6B6B",
  },
  groupOrderButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupOrderIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  groupOrderText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  feeCardsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  feeCard: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 12,
  },
  feeCardTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
    textAlign: "center",
  },
  feeCardLink: {
    fontSize: 13,
    color: "#545454",
    textAlign: "center",
  },
  closedText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
    textAlign: "center",
    textAlignVertical: "center",
  },
  deliveryTimeText: {
    fontSize: 13,
    color: "#545454",
    textAlign: "center",
    textAlignVertical: "center",
  },
  // Featured Items Section by Louis li
  featuredSection: {
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  itemsScroll: {
    paddingLeft: 20,
  },
  foodCard: {
    flex: 1,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },
  addButton: {
    position: "absolute",
    bottom: 60,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 28,
    fontWeight: "300",
    color: "#000",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  foodNameChinese: {
    fontSize: 14,
    color: "#545454",
    marginBottom: 8,
  },
  foodFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  foodRating: {
    fontSize: 14,
    color: "#545454",
  },
  alertButton: {
    backgroundColor: "#000",
    marginHorizontal: 20,
    marginVertical: 16,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
