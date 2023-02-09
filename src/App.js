import {
    Box,
    Icon,
    Heading,
    HStack,
    Input,
    VStack,
    IconButton,
    Button,
    InputGroup,
    InputLeftElement,
    Center,
    Text,
    Divider,
    Textarea,
    ButtonGroup,
    Select,
} from "@chakra-ui/react";
import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import {
    MdEditNote,
    MdFormatAlignCenter,
    MdFormatAlignJustify,
    MdFormatAlignLeft,
    MdFormatAlignRight,
    MdFormatBold,
    MdFormatItalic,
    MdFormatListBulleted,
    MdFormatListNumbered,
    MdFormatUnderlined,
    MdSearch,
} from "react-icons/md";
function App() {
    return (
        <HStack h={"100vh"}>
            <NotesView />
            <EditorView />
        </HStack>
    );
}

const NotesView = () => {
    return (
        <Box bg={"white"} h={"100%"}>
            <VStack p={4} spacing={"4"}>
                <HStack justify={"space-between"} w={"full"}>
                    <Button
                        colorScheme={"orange"}
                        variant={"link"}
                        textDecoration={"none"}
                    ></Button>
                    <IconButton
                        icon={<Icon as={MdEditNote} size={"xl"} />}
                        colorScheme={"orange"}
                        variant={"link"}
                        size={"lg"}
                    />
                </HStack>
                <InputGroup>
                    <InputLeftElement
                        children={<Icon as={MdSearch} size={"lg"} />}
                    />
                    <Input
                        variant={"filled"}
                        placeholder={"Search"}
                        colorScheme={"yellow"}
                        _focus={{ borderColor: "orange.500" }}
                    />
                </InputGroup>
                <Center p={4} bg={"gray.100"} w={"full"} borderRadius={8}>
                    {/* <Heading
                        size={"sm"}
                        color={"gray.400"}
                        fontWeight={500}
                        fontSize={14}
                    >
                        Create a note to get started
                    </Heading> */}
                    <VStack spacing={4}>
                        <NoteItem
                            title={"My First Note"}
                            preview={
                                "Do ullamco amet aliquip duis voluptate aliqua ad elit."
                            }
                        />
                        <NoteItem
                            title={"My Secon Note"}
                            preview={
                                "Do ullamco amet aliquip duis voluptate aliqua ad elit."
                            }
                        />
                    </VStack>
                </Center>
            </VStack>
        </Box>
    );
};

const NoteItem = ({ title, preview }) => {
    return (
        <VStack
            cursor={"pointer"}
            align={"start"}
            spacing={1}
            onClick={() => console.log("PRESSED " + title)}
        >
            <Heading size={"sm"} fontWeight={700} fontSize={15}>
                {title}
            </Heading>
            <Text fontSize={12}>{preview}</Text>
        </VStack>
    );
};

const EditorView = () => {
    return (
        <Box flex={1} h={"100%"} p={4}>
            <Input
                size={"lg"}
                fontSize={24}
                variant={"unstyled"}
                placeholder={"Title"}
            />
            <NoteEditor />
        </Box>
    );
};
const NoteEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
        <Box flex={1}>
            <HStack>
                <Select></Select>

                <HStack spacing={0}>
                    <IconButton
                        icon={<Icon as={MdFormatBold} />}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatItalic} />}
                        borderLeftRadius={0}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatUnderlined} />}
                        borderLeftRadius={0}
                    />
                </HStack>
                <HStack spacing={0}>
                    <IconButton
                        icon={<Icon as={MdFormatAlignLeft} />}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatAlignCenter} />}
                        borderLeftRadius={0}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatAlignRight} />}
                        borderLeftRadius={0}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatAlignJustify} />}
                        borderLeftRadius={0}
                    />
                </HStack>
                <HStack spacing={0}>
                    <IconButton
                        icon={<Icon as={MdFormatListBulleted} />}
                        borderRightRadius={0}
                    />
                    <IconButton
                        icon={<Icon as={MdFormatListNumbered} />}
                        borderLeftRadius={0}
                    />
                </HStack>
            </HStack>
            <Editor editorState={editorState} onChange={setEditorState} />
        </Box>
    );
};
export default App;
