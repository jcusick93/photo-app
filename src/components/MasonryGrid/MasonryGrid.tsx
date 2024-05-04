import * as React from "react";
import { View, Image, ImageProps } from "react-native";
import { tokens } from "../../styles/tokens";

export interface MasonryGridProps {
  images: { uri: string }[];
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  loading?: boolean;
}

interface MasonryGridImageProps extends ImageProps {
  uri: string;
  variant?: "long" | "little" | "big";
}

const gap = 8;

const MasonryGridImage: React.FC<MasonryGridImageProps> = ({
  uri,
  variant,
  ...props
}) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={{ flexGrow: 1, borderRadius: 12, overflow: "hidden" }}>
      {loading && (
        <View
          style={{
            flexGrow: 1,
            backgroundColor: tokens.themeColorForegroundNeutralHigh,
            opacity: 0.1,
          }}
        ></View>
      )}
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={{ uri: uri }}
        {...props}
        style={{
          flexGrow: 1,
          display: loading ? "none" : "flex",
        }}
      />
    </View>
  );
};

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  images,
  onLoadStart,
  onLoadEnd,
}) => {
  return (
    <View
      style={{
        flexGrow: 1,
        gap: gap,
      }}
    >
      {/* box 1 */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: gap,
        }}
      >
        {/* column 1 */}
        <View
          style={{
            flexDirection: "column",
            gap: gap,
            flexGrow: 1,
            height: 300,
          }}
        >
          {images[0] ? <MasonryGridImage uri={images[0].uri} /> : null}
          {images[1] ? <MasonryGridImage uri={images[1].uri} /> : null}
        </View>
        {/* column 2 */}
        <View style={{ height: 300, flexGrow: 1 }}>
          <MasonryGridImage uri={images[2].uri} />
        </View>
      </View>

      {/* box 2 */}
      <View
        style={{
          gap: gap,
          width: "100%",
          flexDirection: "row",
        }}
      >
        {/* column 1 */}
        <View
          style={{
            flexDirection: "column",
            gap: gap,
            flexGrow: 1,
            height: 300,
          }}
        >
          <MasonryGridImage uri={images[3].uri} />
        </View>
      </View>

      {/* box 3 */}
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          gap: gap,
        }}
      >
        {/* row 1 */}
        <View
          style={{
            flexDirection: "row",
            gap: gap,
            flexGrow: 1,
            height: 172,
            width: "100%",
          }}
        >
          <MasonryGridImage
            uri={images[4].uri}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
          />
          {images[5] ? (
            <MasonryGridImage
              uri={images[5].uri}
              onLoadStart={onLoadStart}
              onLoadEnd={onLoadEnd}
            />
          ) : null}
        </View>

        {/* row 2 */}
        {images[6] ? (
          <View style={{ height: 300, flexGrow: 1, width: "100%" }}>
            <MasonryGridImage
              uri={images[6].uri}
              onLoadStart={onLoadStart}
              onLoadEnd={onLoadEnd}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
