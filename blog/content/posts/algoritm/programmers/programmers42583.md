---
title: 다리를 지나는 트럭
date: "2021-03-25T15:25:37.121Z"
template: "post"
draft: false
slug: "programmers_42583"
category: "알고리즘"
tags:
  - "알고리즘"
  - "프로그래머스"
  - "큐"
  - "문제풀이"
  - "java"
description: "프로그래머스 큐 연습문제"
socialImage: "/media/algorithm.png"
---



[![프로그래머스](https://programmers.co.kr/assets/bi-symbol-light-49a242793b7a8b540cfc3489b918e3bb2a6724f1641572c14c575265d7aeea38.png)](https://programmers.co.kr/learn/courses/30/lessons/42583)
<div style="text-align:center"><a href="https://programmers.co.kr/learn/courses/30/lessons/42583">https://programmers.co.kr/learn/courses/30/lessons/42583</a></div>

- 대기중인 트럭에서 한대씩 꺼낸다.
- 다리의 현재하중(bridge_weight)를 체크하여 견딜 수 있을 경우 트럭을 올린다(bridge_weight+트럭무게,큐에 트럭삽입).
- 견디지 못할 경우 큐에 0을 집어 넣는다.
- 이 과정을 초마다 해준다.


```java
import java.util.Queue;
import java.util.LinkedList;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int time = 0, bridge_weight = 0;
        Queue<Integer> on_bridge = new LinkedList<Integer>();
        for (int i = 0; i < truck_weights.length;) {
            while (bridge_weight < weight && i < truck_weights.length) {
                time++;
                bridge_weight += truck_weights[i];
                on_bridge.add(truck_weights[i]);
                i++;
            }
            if (bridge_weight > weight) {
                time += bridge_length;
                while (!on_bridge.isEmpty()) {
                    bridge_weight -= on_bridge.poll();
                }
            }

        }
        if (!on_bridge.isEmpty())
            time += bridge_length;
        return time;
    }
}
```