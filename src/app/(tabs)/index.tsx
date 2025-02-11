import { Text, View, Image } from 'react-native';
import posts from '~/assets/data/posts.json';
import { Ionicons, Feather, AntDesign} from "@expo/vector-icons";

const post1 = posts[0];

export default function FeedScreen() {
    console.log(post1);

    return (
        <View className="bg-white">
            {/* Header */}
            <View className='p-3 flex-row items-center gap-2'>
                <Image 
                    source={{ uri: post1.user.image_url }} 
                    className='w-12 aspect-square rounded-full'
                />
                <Text className="font-semibold">{post1.user.username}</Text>
            </View>
            <Image 
                source={{ uri: post1.image_url }} 
                className='w-full aspect-[4/3]'
            />
            {/* Icons */}
            <View className='flex-row gap-3 p-3'>
                <AntDesign name="hearto" size={20} />
                <Ionicons name="chatbubble-outline" size={20} />
                <Feather name="send" size={20} />

                <Feather name="bookmark" size={20} className="ml-auto" />
            </View>
        </View>
    )
    
}