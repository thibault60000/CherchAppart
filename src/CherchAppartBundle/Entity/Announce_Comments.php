<?php

namespace CherchAppartBundle\Entity;

/**
 * Announce_Comments
 */
class Announce_Comments
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $message;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set message
     *
     * @param string $message
     *
     * @return Announce_Comments
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }
    /**
     * @var \CherchAppartBundle\Entity\Announce
     */
    private $announce;


    /**
     * Set announce
     *
     * @param \CherchAppartBundle\Entity\Announce $announce
     *
     * @return Announce_Comments
     */
    public function setAnnounce(\CherchAppartBundle\Entity\Announce $announce = null)
    {
        $this->announce = $announce;

        return $this;
    }

    /**
     * Get announce
     *
     * @return \CherchAppartBundle\Entity\Announce
     */
    public function getAnnounce()
    {
        return $this->announce;
    }
    /**
     * @var \CherchAppartBundle\Entity\User
     */
    private $user;


    /**
     * Set user
     *
     * @param \CherchAppartBundle\Entity\User $user
     *
     * @return Announce_Comments
     */
    public function setUser(\CherchAppartBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \CherchAppartBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $comments_like;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comments_like = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add commentsLike
     *
     * @param \CherchAppartBundle\Entity\Comments_like $commentsLike
     *
     * @return Announce_Comments
     */
    public function addCommentsLike(\CherchAppartBundle\Entity\Comments_like $commentsLike)
    {
        $this->comments_like[] = $commentsLike;

        return $this;
    }

    /**
     * Remove commentsLike
     *
     * @param \CherchAppartBundle\Entity\Comments_like $commentsLike
     */
    public function removeCommentsLike(\CherchAppartBundle\Entity\Comments_like $commentsLike)
    {
        $this->comments_like->removeElement($commentsLike);
    }

    /**
     * Get commentsLike
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCommentsLike()
    {
        return $this->comments_like;
    }
}
