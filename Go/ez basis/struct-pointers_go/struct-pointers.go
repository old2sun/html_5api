package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    p := &v
    p.X = 1e9
    fmt.Println(v)
    // {1000000000 2}
}

/*
    结构体指针

    结构体字段可以通过结构体指针来访问。

    通过指针间接的访问 是透明的 。
*/
