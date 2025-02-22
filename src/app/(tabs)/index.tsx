import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';
import { supabase } from '~/src/lib/supabase';
import { useAuth } from '~/src/providers/AuthProvider';
   
export default function FeedScreen() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        setLoading(true);
        let { data, error } = await supabase 
            .from('posts') 
            .select('*, user:profiles(*)')
            .order('created_at', { ascending: false });
        if (error) {
            Alert.alert("Something went wrong")
        }
        else {
            setPosts(data);
            setLoading(false);
        }
    }



    return(
        <FlatList 
            data={posts}
            renderItem={({ item }) => <PostListItem post={item} />}
            contentContainerStyle={{ 
                gap: 10, 
                maxWidth: 512, 
                width: '100%',
                alignSelf: 'center'
            }}
            showsVerticalScrollIndicator={false}
            onRefresh={fetchPosts}
            refreshing={loading}
        />
    );
}