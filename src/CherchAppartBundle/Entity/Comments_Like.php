<?php

namespace CherchAppartBundle\Entity;

/**
 * Comments_like
 */
class Comments_Like
{
    /**
     * @var int
     */
    private $id;


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
     * @var \CherchAppartBundle\Entity\User
     */
    private $user;

    /**
     * @var \CherchAppartBundle\Entity\Announce_Comments
     */
    private $announce_comments;


    /**
     * Set user
     *
     * @param \CherchAppartBundle\Entity\User $user
     *
     * @return Comments_like
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
     * Set announceComments
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $announceComments
     *
     * @return Comments_like
     */
    public function setAnnounceComments(\CherchAppartBundle\Entity\Announce_Comments $announceComments = null)
    {
        $this->announce_comments = $announceComments;

        return $this;
    }

    /**
     * Get announceComments
     *
     * @return \CherchAppartBundle\Entity\Announce_Comments
     */
    public function getAnnounceComments()
    {
        return $this->announce_comments;
    }
}
