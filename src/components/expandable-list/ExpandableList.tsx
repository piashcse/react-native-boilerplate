import React, { useRef, useState } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { AppColors } from '@/src/constants/AppColors';
import styles from './ExpandableComponent.style';
import PrimaryTextView from '@/src/components/primary-textview/PrimaryTextView';

// Define types for props
interface ExpandableData {
  title: string;
  subtitles: string[];
}

interface ExpandableProps {
  data: ExpandableData[];
}

const ExpandableComponent: React.FC<ExpandableProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [animations, setAnimations] = useState(
    data.map(() => new Animated.Value(0)) // Each item gets its own animation value
  );

  // Store subtitle heights dynamically
  const subtitleHeights = useRef<number[]>([]);

  const toggleExpand = (index: number) => {
    // If the clicked item is already expanded, collapse it; otherwise, expand it and collapse others
    const isExpanded = expandedIndex === index;
    setExpandedIndex(isExpanded ? null : index);

    Animated.timing(animations[index], {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Collapse the previously expanded item if it's not the same as the clicked one
    if (!isExpanded) {
      animations.forEach((animation, i) => {
        if (i !== index) {
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      });
    }
  };

  // This function is used to measure the height of each subtitle
  const handleSubtitleLayout = (index: number, event: any) => {
    const { height } = event.nativeEvent.layout;
    if (subtitleHeights.current[index] !== height) {
      subtitleHeights.current[index] = height;
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: ExpandableData;
    index: number;
  }) => {
    const heightInterpolate = animations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, subtitleHeights.current[index] * item.subtitles.length], // Adjust dynamically based on content height
    });

    const isExpanded = expandedIndex === index;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => toggleExpand(index)}
          style={[
            styles.header,
            isExpanded && styles.headerExpanded, // Change background color when expanded
          ]}
        >
          <PrimaryTextView
            fontFamily={'semiBold'}
            fontSize={16}
            color={isExpanded ? AppColors.white : AppColors.black} // White text when expanded
          >
            {item.title}
          </PrimaryTextView>
          <Icon
            name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color={isExpanded ? AppColors.white : AppColors.black}
          />
        </TouchableOpacity>
        <Animated.View style={[styles.content, { height: heightInterpolate }]}>
          {isExpanded && (
            <FlatList
              data={item.subtitles}
              keyExtractor={(subItem, subIndex) => `${index}-${subIndex}`}
              renderItem={({ item: subItem, index: subIndex }) => (
                <PrimaryTextView
                  fontFamily={'semiBold'}
                  fontSize={16}
                  onLayout={(event) => handleSubtitleLayout(subIndex, event)} // Measure subtitle height dynamically
                >
                  {subItem}
                </PrimaryTextView>
              )}
            />
          )}
        </Animated.View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default ExpandableComponent;
